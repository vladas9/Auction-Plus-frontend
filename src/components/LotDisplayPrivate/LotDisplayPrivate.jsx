import React from 'react'
import ImageSwiper from '../ImageSwiper/ImageSwiper';
import styles from './LotDisplayPrivate.module.css'
const LotDisplayPrivate = (props) => {
    //console.log(props)
    return (
        <div className={styles.wrapper}>
            <div className={styles.up}>
                <div className={styles.slider}>
                    <ImageSwiper img_src={props.img_src}/>
                </div>
                <div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.description}>{props.description}</div>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.n_bids}>
                    <span className="material-symbols-outlined">bar_chart</span>
                    <span>Number of bids: {props.n_bids}</span>
                </div>
                <div className={styles.start_price}>
                    <span className="material-symbols-outlined">
                        bid_landscape
                    </span>
                    <span>Starting price: {props.start_price}</span>
                </div>
            </div>
        </div>
    )
}

export default LotDisplayPrivate;