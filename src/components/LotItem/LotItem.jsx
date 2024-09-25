import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import React from "react";
import { color } from "chart.js/helpers";

const LotItem = (props) => {

  let formattedEndDate = "No end date available";
  if (props?.endtime) {
    try {
      const date = new Date(props.endtime);
      const dateOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
      };
      const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
      const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
      formattedEndDate = `${formattedDate} - [${formattedTime}]`;
    } catch (error) {
      formattedEndDate = "Invalid date";
    }
  }

  return (
    <div className={styles.card}>
      <Link to={`/lot/${props.id}`} className={styles.imageLink}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.img_src ? props.img_src : 'https://fundatia.moldcell.md/wp-content/themes/consultix/images/no-image-found-360x250.png'})`
        }}
      ></div>
    </Link>


      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>

        <div className={styles.details}>
          <div className={styles.detail} style={{color:"#29ADB2"}}>
          <span className="material-symbols-outlined">bar_chart</span> Number of bids: {props.num_of_bids}
          </div>
          <div className={styles.detail} style={{color: "#0766AD"}}>
          <span className="material-symbols-outlined">calendar_month</span> {formattedEndDate}
          </div>
          <div className={styles.detail} style={{color: "#000000"}}>
          <span className="material-symbols-outlined">bid_landscape</span> Maximum bid: {props.last_bid}$
          </div>
        </div>

        <div className={styles.lotDetails}>
          <div className={styles.lotId}>Lot number: {props.id}</div>
          <div className={styles.lotCategory}>Category name: {props.category_name}, {props.condition}</div>
        </div>
      </div>
    </div>
  );
};

export default LotItem;
