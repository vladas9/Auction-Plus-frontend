import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import React from "react";

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
          <div className={styles.detail}>
            <span className={styles.icon}>📊</span> Number of bids: {props.rating}
          </div>
          <div className={styles.detail}>
            <span className={styles.icon}>📅</span> {props.endtime}
          </div>
          <div className={styles.detail}>
            <span className={styles.icon}>💲</span> Maximum bid: {props.last_bid}$
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
