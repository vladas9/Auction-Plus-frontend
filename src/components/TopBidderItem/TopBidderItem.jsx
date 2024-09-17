import React from "react";
import styles from "./TopBidderItem.module.css"
const TopBidderItem = (props)=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.place}>{props.place}</div>
            <div className={styles.pfp} style={{backgroundImage:`url(${props.pfp})`}}></div>
            <div className={styles.username}>{props.username}</div>
            <div className={styles.bid_val}>${props.bid_val}</div>
        </div>
    )
}

export default TopBidderItem;