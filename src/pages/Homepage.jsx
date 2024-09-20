import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../styles/Homepage.module.css";
import LotItem from "../components/LotItem/LotItem";
import Statistics from "../components/Statistics/Statistics";
import FilterBar from "../components/FilterBar/FilterBar";

export default function Homepage(){
    const [lots, setLots] = useState([]);
    const [totalPages, setTotalPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();

    let statistics_1 = { title: "Active bidders", value: 123754 };
    let statistics_2 = { title: "Opened lots", value: 123754 };
    let statistics_3 = { title: "Total lots sold", value: 23123754 };

    // Fetch lots whenever the page changes
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get("page")) || 1;
        setCurrentPage(page);

        // Simulate fetching data from the server
        fetchLots(page);
    }, [location]);
    const fetchLots = (page) => {
        // Simulate fetching lots from a server
        // Replace this mock data with actual API call in a real app
        const fetchedLots = [
            {
                id: 1,
                img_src: "https://m.media-amazon.com/images/I/71+mhWHnBdL._AC_UF894,1000_QL80_.jpg",
                title:"Test lot 1",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"12 february" ,
                status:"closed"   
            },
            {
                id: 2,
                img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                title:"Test lot 2",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"12 february" ,
                status:"closed"   
            },
            {
                id: 3,
                img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvMk1EncRwvOQrIDtvgWJAUz3AOdTGEo27tfGcklGz3ls0deuan4rgtd1BonOtO2qcMA&usqp=CAU",
                title:"Test lot 3",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"31 january" ,
                status:"closed"   
            },
            {
                id:4,
                img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                title:"Test lot 4",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"12 february" ,
                status:"closed"   
            },
            {
                id: 5,
                img_src: "https://m.media-amazon.com/images/I/71+mhWHnBdL._AC_UF894,1000_QL80_.jpg",
                title:"Test lot 5",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"12 february" ,
                status:"closed"   
            },
            {
                id: 6,
                img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                title:"Test lot 6",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"2024-09-09T13:34:15+03:00" ,
                status:"closed"   
            },
            {
                id: 7,
                img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvMk1EncRwvOQrIDtvgWJAUz3AOdTGEo27tfGcklGz3ls0deuan4rgtd1BonOtO2qcMA&usqp=CAU",
                title:"Test lot 7",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"2024-09-09T13:34:15+03:00" ,
                status:"closed"   
            },
            {
                id: 8,
                img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                title:"Test lot 8",
                start_price: 200,
                last_bid:300,
                rating: 30,
                endtime:"2024-09-09T13:34:15+03:00" ,
                status:"closed"   
            }
        ];
        setLots(fetchedLots);

        // Simulate setting total pages from server response
        setTotalPages(10); 
    };

    const handlePageClick = (pageNumber) => {
        navigate(`/?offset=${pageNumber}`);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            navigate(`/?offset=${currentPage - 1}`);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            navigate(`/?offset=${currentPage + 1}`);
        }
    };

    return (
        <div className={styles.full_container}>
            <div className={styles.wrapper}>
                <div className={styles.statistics}>
                    <Statistics title={statistics_1.title} value={statistics_1.value} valueColor="#29ADB2" iconName="person" />
                    <Statistics title={statistics_2.title} value={statistics_2.value} valueColor="#0766AD" iconName="bid_landscape" />
                    <Statistics title={statistics_3.title} value={statistics_3.value} valueColor="#FF3A20" iconName="bid_landscape_disabled" />
                </div>

                <div className={styles.filter}><FilterBar /></div>

                <div className={styles.lotList}>
                    {lots.map((item) => (
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
                    ))}
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
