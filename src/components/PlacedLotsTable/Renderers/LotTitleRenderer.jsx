import React from "react";
import styles from "./LotTitleRenderer.module.css"
export default (params)=>{
    return(
    <div className={styles.wrapper}>
        <div className={styles.imgLot} style={{backgroundImage:`url(${params.value[0]})`}}>
        
        </div>
        <div className={styles.title}>
            {params.value[1]}
        </div>
    </div>
)}