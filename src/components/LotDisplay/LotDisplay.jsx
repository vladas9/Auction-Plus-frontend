import React, { useState } from 'react';
import styles from './styles.module.css';
import ImageSwiper from '../ImageSwiper/ImageSwiper';
import BidInput from '../BidInput/BidInput';
import ConfirmButton from '../ConfirmButtonForLot/ConfirmButton';
import StatisticsChart from '../StatisticsChart/StatisticsChart';

const LotDisplay = (props) => {
    const [bid, setBid] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleBidChange = (event) => {
        setBid(event.target.value);
        setStatusMessage(''); 
    };

    const handleConfirmClick = () => {
        if ((Number(bid) > props.max_bid) && (props.opened)) {
            setIsSubmitting(true);
            const authToken = localStorage.getItem('auth_token');

            fetch('/api/post_bid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    amount: Number(bid),
                    auction_id: props.id,
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to place the bid');
                }
                return response.json();
            })
            .then(data => {
                console.log('Bid successfully placed:', data);
                setStatusMessage('Your bid was successfully placed!');
                setBid(''); 
                props.onBidSuccess(Number(bid)); 
            })
            .catch(error => {
                console.error('Error placing the bid:', error);
                setStatusMessage('Failed to place the bid. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
        } else {
            setStatusMessage('Your bid is too low or the auction is closed.');
        }
    };

    const isHigher = (Number(bid) > props.max_bid) && (props.opened);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main_container}>
                <div className={styles.up}>
                    <div className={styles.slider}>
                        <ImageSwiper img_src={props.img_src} />
                    </div>
                    <div className={styles.info_part}>
                        <div className={styles.title}>{props.title}</div>
                        <div>
                            <div className={styles.n_bids}>
                                <span className="material-symbols-outlined">bar_chart</span>
                                <p>Number of bids: {props.n_bids}</p>
                            </div>
                            <div className={styles.data}>
                                <span className="material-symbols-outlined">calendar_month</span>
                                <p>{props.end_date}</p>
                            </div>
                            <div className={styles.max_bid}>
                                <span className="material-symbols-outlined">bid_landscape</span>
                                <p>Maximum bid: {props.max_bid}$</p>
                            </div>
                            <div className={styles.lot_status}>
                                {props.opened ? <p style={{ color: "#29ADB2" }}> <br /></p> : <p style={{ color: "#FF3A20" }}>Sold out</p>}
                            </div>
                            <div className={styles.to_bid}>
                                <div>
                                    <BidInput bidVal={bid} callback={handleBidChange} />
                                </div>
                                <div>
                                    <ConfirmButton 
                                        higher={isHigher} 
                                        callback={handleConfirmClick} 
                                        isSubmitting={isSubmitting}
                                    />
                                </div>
                            </div>
                            {statusMessage && (
                                <div className={styles.statusMessage}>
                                    <p>{statusMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.intro}><p>Description</p></div>
                    <div className={styles.description}>
                        <p>{props.description.split('\n').map((line, index) => (<React.Fragment key={index}>{line}<br /></React.Fragment>))}</p>
                    </div>
                    <div className={styles.intro}><p>Statistics</p></div>
                    <div className={styles.statistic}>
                        <StatisticsChart
                            labels={props.labels}
                            bidsPerDay={props.bids_perday}
                            maxBidPerDay={props.max_bid_perday}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LotDisplay;
