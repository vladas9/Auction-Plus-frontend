import React, { useState } from "react";
import styles from "./styles.module.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination} from "swiper/modules";
export default function LotDisplay(){
    const [bid_val, setBid_val]=useState(0)
    var sendBid=()=>{
        console.log(`send ${bid_val}`)
    }
    //example of lot
    var lot={
        id: 0,
        img_srcs: [
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
        ],
        title:"Test lot",
        start_price: 200,
        last_bid:300,
        rating: 30,
        endtime:"12 february" ,
        status:"closed",
        description:"loremohegoreoubueoiwbbvnre ierviuwern ui  ifn wfg ic bv cvou hcihv hocvi hofgh oriuhgfo hitrhutbuybeu u osBOP AD OUYBDA PSQREO PIDG H ABTRJ GIUPBH GFPIB DB NPpiub eiieb tih"   
    }
    return(
        <>
            <div className={styles.display}>
                <div className={styles.display__top}>
                    <div className={styles.display__left}>
                        {/*the image displaying here*/}
                        <Swiper
                            modules={[Pagination, Navigation, A11y]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            
                        >
                            <SwiperSlide>
                                <div className={styles.display__swiper__image} style={{backgroundImage:`url(${lot.img_srcs[0]})`}}></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.display__swiper__image} style={{backgroundImage:`url(${lot.img_srcs[1]})`}}></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.display__swiper__image} style={{backgroundImage:`url(${lot.img_srcs[2]})`}}></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.display__swiper__image} style={{backgroundImage:`url(${lot.img_srcs[3]})`}}></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.display__right}>
                        <div className={styles.display__title}>
                            {lot.title}
                        </div>
                        <div className={styles.display__startPrice}>
                            Starting price: {lot.start_price}
                        </div>
                        <div className={styles.display__input}>
                            <input value={bid_val} onChange={(e)=>setBid_val(e.target.value)} type="number" />
                        </div>
                        <div onClick={sendBid} className={styles.display__confirmButton}>
                            Confirm
                        </div>
                        <div className={styles.display__remainingTime}>
                            {lot.endtime}
                        </div>
                    </div>
                </div>
                <div className={styles.display__info}>
                    <div className={styles.info__title}>Description</div>
                    <div className={styles.info__description}>
                        {lot.description}
                    </div>
                    <div className={styles.info__statistics}>
                        {/*use d3 js or other libs*/}
                    </div>
                </div>
            </div>
        </>
    )
}