import styles from "./styles.module.css"
import { Link } from 'react-router-dom';
import React from "react"

const LotItem=(props)=>{
    //test object
    console.log(props.img_src)
    return(
        <>
        <div className={styles.wrapper}>

            <Link to={`/lot/${props.id}`} >
                <div className={styles.img__wrapper} style={{backgroundImage:`url(${props.img_src})`}}>
                
                </div>
            </Link>
            <div className={styles.lot_info__wrapper}>
                <div className={styles.lot_title}>
                    {props.title}
                </div>
                
                <div className={styles.lot_info_first_row}>
                    <div className={styles.lot_startprice}>
                        Start price: {props.start_price}
                    </div>
                    <div className={styles.lot_rating}>
                        Rating: {props.rating}
                    </div>
                    <div className={styles.lot_status}>
                        {props.status}
                    </div>
                </div>

                <div className={styles.lot_info_second_row}>
                    <div className={styles.lot_lastbid}>
                        Current bid: {props.last_bid}
                    </div>
                    <div className={styles.lot_endtime}>
                        {props.endtime}
                    </div>
                </div>
                
            </div>        
        </div>
        </>
    )
}
export default LotItem