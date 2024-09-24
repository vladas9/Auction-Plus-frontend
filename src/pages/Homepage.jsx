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
    const [cardStats, setCardStats] = useState({
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

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:1169/api/home-cardsinfo");
        ws.onmessage = (event) => {
            var updatedCards = JSON.parse(event.data);
            setCardStats(updatedCards);
        }
        ws.onerror = (err) => {
            console.error("failed to get data for statistic card:", err.message);
        }
        ws.onclose = () => {
            ws.close();
        }
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get("page")) || 1;
        setCurrentPage(page);
        fetchLots(page, filters);
    }, [location]);

    const fetchLots = (page, filters) => {
        const offset = page;
        const query = new URLSearchParams({
            limit: 9,
            offset,
            category: filters.category,
            minprice: filters.minprice,
            maxprice: filters.maxprice,
            lotcondition: filters.lotcondition,
        }).toString();
        fetch(`http://localhost:1169/api/auctions?${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLots(data.lots);
                const totalItems = data.total_items || 90; 
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


    return (
        <div className={styles.full_container}>
            <div className={styles.wrapper}>
                <div className={styles.statistics}>
                    <Statistics title="Active bidders" value={cardStats.active_bidders} valueColor="#29ADB2" iconName="person" />
                    <Statistics title="Opened lots" value={cardStats.opened_lots} valueColor="#0766AD" iconName="bid_landscape" />
                    <Statistics title="Total lots sold" value={cardStats.total_lots} valueColor="#FF3A20" iconName="bid_landscape_disabled" />
                </div>

                <div className={styles.filter}>
                    <FilterBar fetchLots={fetchLots} filters={filters} setFilters={setFilters}/>
                </div>

                <div className={styles.lotList}>
                    {lots!=null ? (
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
