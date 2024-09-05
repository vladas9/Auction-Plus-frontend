import React from "react";
import styles from "../styles/Homepage.module.css"
import LotItem from "../components/LotItem/LotItem"
export default function Homepage(){
    var lots_array=[]
    return(
        <>
            {
                /*lots_array.map((i, item)=>{
                    return <LotsItem
                        lot_number=(item.lot_number)
                        image_url={item.img_url}
                        title={item.title}
                        
                    />
                })
            */}
            <div className={styles.lotList}>
                <LotItem/><LotItem/><LotItem/><LotItem/><LotItem/><LotItem/>
            </div>
        </>
    )
}