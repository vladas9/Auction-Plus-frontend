import React, {useState}from "react";
import { Link } from "react-router-dom";
import styles from "./NotifIcon.module.css"

export default function NotifIcon(props){
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    const toggleNotif = () => {
        setIsNotifOpen(!isNotifOpen);
    };
    return(
        <>
        <Link to="/notif" className={styles.notif_button} onClick={toggleNotif}>
            <span className="material-symbols-outlined">notifications</span>
            {props.has_notification && ( 
                <span className={styles.notif_indicator}></span>
            )}
        </Link>
        </>
    )
}