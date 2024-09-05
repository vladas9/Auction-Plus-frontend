import styles from "./styles.module.css"
import React from "react"
const LotItem=()=>{
    //test object
    var lot={
        img_src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        title:"test lot",
        start_price: 200,
        last_bid:300,
        rating: 30,
        endtime:"12 february"    
    }
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.img__wrapper} style={{backgroundImage:`url(${lot.img_src})`}}>
                
            </div>
            <div className={styles.lot_info__wrapper}>
                <div className={styles.lot_title}>
                    {lot.title}
                </div>
                <div className={styles.lot_startprice}>
                    {lot.start_price}
                </div>
                <div className={styles.lot_rating}>
                    {lot.rating}
                </div>
                <div className={styles.lot_status}>
                    {lot.status}
                </div>
                <div className={styles.lot_lastbid}>
                    {lot.last_bid}
                </div>
                <div className={styles.lot_endtime}>
                    {lot.endtime}
                </div>
                
            </div>        
        </div>
        </>
    )
}
export default LotItem