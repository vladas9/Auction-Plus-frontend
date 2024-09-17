import React, { useState, useEffect } from 'react';
import styles from '../styles/PrivateSession.module.css';
import LotDisplayPrivate from '../components/LotDisplayPrivate/LotDisplayPrivate';
import { Link } from 'react-router-dom';
import TimeBar from '../components/Timebar/TimeBar';
import TopBidderItem from '../components/TopBidderItem/TopBidderItem';
import BidInput from '../components/BidInput/BidInput';
import BidButton from '../components/ConfirmButton/ConfirmButton';

export default function PrivateSession(){
  const [bidVal, setBidVal]=useState('');
  const [isBidHigher, setIsBidHigher]=useState(false)
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
    "description": "iuehiuhrebherobjoerb jihrebvjqbviebqvripqebvr qebpvuibeqivbpuvwqbpiruwvpib lorem  rvonoeqribn[oen    ji ie p  o iphef bfufdna oidgsp bd iadif saibdf piadfu bnad fpad fdai",
    "n_bids": 12,
    "start_price": 200,
    "opened": true
  }
  var ws_data={
    "participants_top": [
      {
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKA2sQmY7PrZHexsFoPVxY-uv9gMUZ0Tv7A&s",
        "username": "username1",
        "bid_val": 123
      },
      {
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKA2sQmY7PrZHexsFoPVxY-uv9gMUZ0Tv7A&s",
        "username": "username2",
        "bid_val": 120
      },
      {
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKA2sQmY7PrZHexsFoPVxY-uv9gMUZ0Tv7A&s",
        "username": "username3",
        "bid_val":88
      },
      {
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKA2sQmY7PrZHexsFoPVxY-uv9gMUZ0Tv7A&s",
        "username": "username4",
        "bid_val": 50
      }
      
    ],
    "n_bids": 13,
    "opened": false // if lot is closed
  }
  var top_bidders = ws_data.participants_top; 
  
  const changeInputStates = (e) =>{
    var input_value = e.target.value
    setBidVal(input_value);
    if(input_value>ws_data.participants_top[0].bid_val){
      setIsBidHigher(true);
    }else{
      setIsBidHigher(false);
    }
  }

  const handleBidConfirm=()=>{
    if(bidVal>ws_data.participants_top[0].bid_val){
      alert('bid confirmed');
      setBidVal('');
      setIsBidHigher(false);
    }
  }
  const handleAutoBid=(maxBid)=>{
    alert(`user wish to put a bid of ${maxBid+50}`)
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
              <TimeBar duration={20} />
          </div>
          <Link className={styles.left__quitbtn} to="/">
            <div className={styles.left__quitbtn__text}>
              Quit session
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__list}>
          <div className={styles.right__list__title}>
            Participants list
          </div>
          <div className={styles.right__list__participants}>
            {top_bidders.map((val, i)=>
              <TopBidderItem
                  key={i}
                  place={i+1}
                  pfp={val.img_url}
                  username={val.username}
                  bid_val={val.bid_val}
              />
            )}
          </div>
        </div>
        <div className={styles.right__input}>
          <div className={styles.right__input__manual}>
            <div className={styles.right__input__field}>
              <BidInput bidVal={bidVal} callback={changeInputStates}/>
            </div>
            <div className={styles.right__input__confirm}>
              <BidButton
                callback={handleBidConfirm}
                higher={isBidHigher}
                />
            </div>
          </div>
          <div className={styles.right__input__automatic} onClick={()=>handleAutoBid(ws_data.participants_top[0].bid_val)}>
            Bid 50 more than Top 1
          </div>
        </div>
      </div>
    </div>
  );
};
