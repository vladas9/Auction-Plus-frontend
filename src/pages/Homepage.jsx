import React from "react";
import styles from "../styles/Homepage.module.css"
import LotItem from "../components/LotItem/LotItem"
export default function Homepage(){
    //fetch data about lots
    var lots_array=[
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
            endtime:"12 february" ,
            status:"closed"   
        },
        {
            id: 7,
            img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvMk1EncRwvOQrIDtvgWJAUz3AOdTGEo27tfGcklGz3ls0deuan4rgtd1BonOtO2qcMA&usqp=CAU",
            title:"Test lot 7",
            start_price: 200,
            last_bid:300,
            rating: 30,
            endtime:"31 january" ,
            status:"closed"   
        },
        {
            id: 8,
            img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            title:"Test lot 8",
            start_price: 200,
            last_bid:300,
            rating: 30,
            endtime:"12 february" ,
            status:"closed"   
        }
    ]
    return(
        <>
            
            <div className={styles.lotList}>
            {
                lots_array.map((item)=>{
                    return (
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
                        
                    )
                })
            }
            </div>
        </>
    )
}