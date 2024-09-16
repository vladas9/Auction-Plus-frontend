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
                <div>
                    <span className="material-symbols-outlined">bar_chart</span>
                    Number of bids: {props.n_bids}
                </div>
                <div>
                    <span className="material-symbols-outlined">
                        bid_landscape
                    </span>
                    Starting price: {props.start_price}
                </div>
            </div>
        </div>
    )
}

export default LotDisplayPrivate;