import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../styles/Homepage.module.css";
import LotItem from "../components/LotItem/LotItem";
import Statistics from "../components/Statistics/Statistics";
import FilterBar from "../components/FilterBar/FilterBar";

export default function Homepage() {
    const [lots, setLots] = useState([]);
    const [totalPages, setTotalPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [statistics, setStatistics] = useState({
        active_bidders: 0,
        opened_lots: 0,
        total_lots: 0
    });
    const [filters, setFilters] = useState({
        category: "",
        minprice: "",
        maxprice: "",
        lotcondition: ""
    });
    
    const navigate = useNavigate();
    const location = useLocation();

    // Fetch statistics from server
    useEffect(() => {
        fetch('/api/home-cardsinfo')
            .then(response => response.json())
            .then(data => setStatistics(data))
            .catch(error => console.error('Error fetching statistics:', error));
    }, []);

    // Establish WebSocket connection
    useEffect(() => {
        const ws = new WebSocket('ws://your-websocket-url');
        
        ws.onmessage = (event) => {
            const updatedLot = JSON.parse(event.data);
            setLots((prevLots) => 
                prevLots.map(lot => lot.id === updatedLot.id ? updatedLot : lot)
            );
        };

        return () => {
            ws.close();
        };
    }, []);

    // Fetch lots whenever the page or filters change
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get("page")) || 1;
        setCurrentPage(page);
        fetchLots(page, filters);
    }, [location, filters]);

    const fetchLots = (page, filters) => {
        const offset = (page - 1) * 9;
        const query = new URLSearchParams({
            limit: 9,
            offset,
            category: filters.category,
            minprice: filters.minprice,
            maxprice: filters.maxprice,
            lotcondition: filters.lotcondition,
        }).toString();

        fetch(`/api/lot-list?${query}`)
            .then(response => response.json())
            .then(data => {
                setLots(data);
                const totalItems = data.total_items || 90; // Replace with actual total count
                setTotalPages(Math.ceil(totalItems / 9));
            })
            .catch(error => console.error('Error fetching lots:', error));
    };

    const handlePageClick = (pageNumber) => {
        navigate(`/?page=${pageNumber}`);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            navigate(`/?page=${currentPage - 1}`);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            navigate(`/?page=${currentPage + 1}`);
        }
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className={styles.full_container}>
            <div className={styles.wrapper}>
                <div className={styles.statistics}>
                    <Statistics title="Active bidders" value={statistics.active_bidders} valueColor="#29ADB2" iconName="person" />
                    <Statistics title="Opened lots" value={statistics.opened_lots} valueColor="#0766AD" iconName="bid_landscape" />
                    <Statistics title="Total lots sold" value={statistics.total_lots} valueColor="#FF3A20" iconName="bid_landscape_disabled" />
                </div>

                <div className={styles.filter}>
                    <FilterBar onChange={handleFilterChange} />
                </div>

                <div className={styles.lotList}>
                    {lots.length > 0 ? (
                        lots.map((item) => (
                            <LotItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                img_src={item.img_src}
                                start_price={item.start_price}
                                rating={item.rating}
                                status={item.status}
                                last_bid={item.last_bid}
                                endtime={item.endtime}
                            />
                        ))
                    ) : (
                        <div className={styles.noLotsMessage}>
                            No lots available. 
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.pagination}>
                <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageClick(index + 1)}
                        className={currentPage === index + 1 ? styles.activePage : ""}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}
