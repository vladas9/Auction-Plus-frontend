import React from "react";
import styles from "./ProfilePhoto.module.css"
export default function ProfilePhoto({profilePic}) {
    return (
        <div
            className={styles.profile__info__photo}
            style={{ backgroundImage: `url("${profilePic}")` }}
        ></div>
    );
}
