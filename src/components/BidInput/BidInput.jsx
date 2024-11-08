import React from "react";
import styles from "./BidInput.module.css"
export default function BidInput({bidVal, callback}){
    
    return(
        <>
            <input className={styles.input} value={bidVal} onChange={callback} type="number" placeholder="Place a bid"/>
        </>
    )
}