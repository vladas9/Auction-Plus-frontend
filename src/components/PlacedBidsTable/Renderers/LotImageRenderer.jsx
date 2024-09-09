import React from "react";
import styles from "./LotImageRenderer.module.css"
export default (params)=>{
    //console.log(params)
    return(
    <div className={styles.imgLot} style={{backgroundImage:`url(${params.value})`}}>
        
    </div>
)}