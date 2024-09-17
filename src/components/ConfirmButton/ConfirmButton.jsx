import React from "react";
import styles from "./ConfirmButton.module.css"
export default function BidButton({higher, callback}){
    console.log(higher)
    return(
        <div  onClick={callback} className={styles.button} style={higher?{color:"#F3F3F3", 
                            backgroundColor:"#C5E898",
                            cursor:"pointer"}:{color:"#C5E898", 
                            backgroundColor:"#F3F3F3",
                            cursor:"not-allowed"}}>
            Confirm
        </div>
    )
}