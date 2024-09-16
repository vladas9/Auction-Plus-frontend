import React, { useState, useEffect } from 'react';
import styles from '../styles/PrivateSession.module.css';
import LotDisplayPrivate from '../components/LotDisplayPrivate/LotDisplayPrivate';
import { Link } from 'react-router-dom';
export default function PrivateSession(){
  //private session data
  var http_data={
    "id": 1,
    "title": "Title",
    "img_src": [
      "https://i.simpalsmedia.com/999.md/BoardImages/900x900/95c04d61675cf450b7dd55b1400abae3.jpg",
      "https://i.simpalsmedia.com/999.md/BoardImages/900x900/cef84f2b8b378fe7675465723afae6c6.jpg",
      "https://i.simpalsmedia.com/999.md/BoardImages/900x900/80532c24a7b7e600084798d894008c31.jpg",
      "https://i.simpalsmedia.com/999.md/BoardImages/900x900/90bce505e15b7ea4ad78d7e90ed250be.jpg"
    ],
    "description": "iuehiuhrebherobjoerbj",
    "n_bids": 12,
    "start_price": 200,
    "opened": true
  }
  var ws_data={
    "participants_top": [
      {
        "img_url": "link.jpg",
        "username": "username",
        "bid_val": 123
      }
      
    ],
    "n_bids": 13,
    "opened": false // if lot is closed
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <div className={styles.left}>
          <div className={styles.left__lot}>
            <LotDisplayPrivate 
              img_src={http_data.img_src}
              description={http_data.description}
              n_bids={http_data.n_bids}
              start_price={http_data.start_price}
              title={http_data.title}
            />
          </div>
          <div className={styles.left__timer}>
            <div className={styles.left__timer__bar}>
              {/*bar component transmit the total_time and time_left*/}
            </div>
            <div className={styles.left__timer__counter}></div>
          </div>
          <div className={styles.left__quitbtn}>
            Quit session
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__list}>
          <div className={styles.right__list__title}>
            Participants list
          </div>
          <div className={styles.right__list__participants}>
            {/*display the top by mapping the component of a participant*/}
          </div>
        </div>
        <div className={styles.right__input}>
          <div className={styles.right__input__manual}>
            <div className={styles.right__input__field}>
              {/*write a component and use it in lot items page*/}
            </div>
            <div className={styles.right__input__confirm}>
              {/*Component for confirm button*/}
            </div>
          </div>
          <div className={styles.right__input__automatic}>
            Bid 50 more than Top 1
          </div>
        </div>
      </div>
    </div>
  );
};
