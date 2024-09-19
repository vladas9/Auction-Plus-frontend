import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import React from "react";
import { color } from "chart.js/helpers";

const LotItem = (props) => {
  return (
    <div className={styles.card}>
      <Link to={`/lot/${props.id}`} className={styles.imageLink}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${props.img_src})` }}
        ></div>
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>

        <div className={styles.details}>
          <div className={styles.detail} style={{color:"#29ADB2"}}>
          <span className="material-symbols-outlined">bar_chart</span> Number of bids: {props.rating}
          </div>
          <div className={styles.detail} style={{color: "#0766AD"}}>
          <span className="material-symbols-outlined">calendar_month</span> {props.endtime}
          </div>
          <div className={styles.detail} style={{color: "#000000"}}>
          <span className="material-symbols-outlined">bid_landscape</span> Maximum bid: {props.last_bid}$
          </div>
        </div>

        <div className={styles.lotDetails}>
          <div className={styles.lotId}>Lot number: {props.id}</div>
          <div className={styles.lotCategory}>Category name</div>
        </div>
      </div>
    </div>
  );
};

export default LotItem;
