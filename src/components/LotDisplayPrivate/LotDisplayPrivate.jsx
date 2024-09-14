import React from 'react'
import ImageSwiper from '../ImageSwiper/ImageSwiper';
import styles from './LotDisplayPrivate.module.css'
const LotDisplayPrivate = (props) => {
    //console.log(props)
  return (
    <div className={styles.wrapper}>
        <div className={styles.up}>
            <div>
                <ImageSwiper img_src={props.img_src}/>
            </div>
            <div>
                <div>{props.title}</div>
                <div>{props.description}</div>
            </div>
        </div>
        <div className={styles.down}>
            <div>
                <span class="material-symbols-outlined">bar_chart</span>
                Number of bids: {props.n_bids}
            </div>
            <div>
                <span class="material-symbols-outlined">
                    bid_landscape
                </span>
                Starting price: {props.start_price}
            </div>
        </div>
    </div>
  )
}

export default LotDisplayPrivate;