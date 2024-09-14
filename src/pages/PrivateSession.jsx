import React, { useState, useEffect } from 'react';
import styles from '../styles/PrivateSession.module.css';
import ImageSwiper from "../components/ImageSwiper/ImageSwiper"

export default function PrivateSession(){


  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <div className={styles.left}>
          <div className={styles.left__lot}>
            <ImageSwiper/>
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
