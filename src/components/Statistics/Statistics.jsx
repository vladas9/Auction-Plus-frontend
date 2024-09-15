import React from "react";
import styles from "./styles.module.css";

const Statistics = ({ title, value, valueColor, iconSrc }) => {
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className={styles.statisticsItem}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.value} style={{ color: valueColor }}>
                    {formatNumber(value)}
                </div>
            </div>
            <div className={styles.iconContainer}>
                <img src={iconSrc} alt="icon" className={styles.icon} />
            </div>
        </div>
    );
};

export default Statistics;
