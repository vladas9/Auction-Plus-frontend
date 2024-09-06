import styles from "./styles.module.css"
import React from "react"
//import { Link } from "react-router-dom"
const LotItem=()=>{
    //test object
    
    var lot={
        id: 0,
        img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        title:"Test lot",
        start_price: 200,
        last_bid:300,
        rating: 30,
        endtime:"12 february" ,
        status:"closed"   
    }
    return(
        <>
        <div className={styles.wrapper}>

            {/*<Link to={`/lot/${lot.id}`} >*/}
                <div className={styles.img__wrapper} style={{backgroundImage:`url(${lot.img_src})`}}>
                
                </div>
            {/*</Link>*/}
            <div className={styles.lot_info__wrapper}>
                <div className={styles.lot_title}>
                    {lot.title}
                </div>
                
                <div className={styles.lot_info_first_row}>
                    <div className={styles.lot_startprice}>
                        Start price: {lot.start_price}
                    </div>
                    <div className={styles.lot_rating}>
                        Rating: {lot.rating}
                    </div>
                    <div className={styles.lot_status}>
                        {lot.status}
                    </div>
                </div>

                <div className={styles.lot_info_second_row}>
                    <div className={styles.lot_lastbid}>
                        Current bid: {lot.last_bid}
                    </div>
                    <div className={styles.lot_endtime}>
                        {lot.endtime}
                    </div>
                </div>
                
            </div>        
        </div>
        </>
    )
}
export default LotItem