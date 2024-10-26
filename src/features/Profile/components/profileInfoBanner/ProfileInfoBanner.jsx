import React from "react";
import styles from "./ProfileInfoBanner.module.css";
export default function ProfileInfoBanner({username, email, phone_number, accountAge}) {
    return (
        <div className={styles.profile__info__text}>
            <div className={styles.profile__info__header}>
                <span>{username}</span>
            </div>
            <div className={styles.profile__info__item}>
                <span className="material-symbols-outlined">mail</span>
                <span>{email}</span>
            </div>
            <div className={styles.profile__info__item}>
                <span className="material-symbols-outlined">call</span>
                <span>{phone_number}</span>
            </div>
            <div className={styles.profile__info__item}>
                <span>Profile age: {accountAge} months</span>
            </div>
        </div>
    );
}
