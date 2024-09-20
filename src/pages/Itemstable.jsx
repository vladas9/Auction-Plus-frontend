import React, { useState } from "react";
import PlacedBidsTable from "../components/PlacedBidsTable/PlacedBidsTable";
import PlacedLotsTable from "../components/PlacedLotsTable/PlacedLotsTable";
import styles from "../styles/Itemstable.module.css"
import { Link } from "react-router-dom";

export default function Itemstable() {
    const [placedItems, setplacedItems]=useState(true)

    var placed_bids=[
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 2",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 50,
          "category": "Arts",
          "top_bidder_username": "username1",
          "users_bid": 234
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "2024-09-09T13:34:15+03:00",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": true,
          "max_bid": 50,
          "category": "Real estate",
          "top_bidder_username": "username2",
          "users_bid": 234
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 42",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 60,
          "category": "Arts",
          "top_bidder_username": "username1",
          "users_bid": 234
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 32",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 500,
          "category": "Arts",
          "top_bidder_username": "username2",
          "users_bid": 234
        },
          
      ]
      var placed_lots=[
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 12",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 50,
          "category": "Arts",
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 62",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": true,
          "max_bid": 50,
          "category": "Arts",
          "top_bidder_username": "username2"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 21",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 60,
          "category": "Real estate",
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 2",
          "start_price": 44,
          "end_date": "2024-09-09T13:34:15+03:00",
          "closed": false,
          "max_bid": 530,
          "category": "Arts",
          "top_bidder_username": "username3"
        },
      ]
  return (
    <>
      <div className={styles.profile__tables}>
        <div className={styles.profile__tables__buttons}>
          <div className={styles.switch} style={placedItems?{backgroundColor:"#fff"}:{backgroundColor:"#F3F3F3"}} onClick={()=>setplacedItems(true)}>Placed Lots</div>
          <div className={styles.switch} style={!placedItems?{backgroundColor:"#fff"}:{backgroundColor:"#F3F3F3"}} onClick={()=>setplacedItems(false)}>Placed Bids</div>
          
            {placedItems?(
              <Link className={styles.button__wrapper} to="/profile/postlot">
                  <div className={styles.addlot_button}>+ Add Lot</div>
              </Link>):<></>}
          
        </div>
    
        {placedItems?<PlacedLotsTable lots={placed_lots}/>:<PlacedBidsTable bids={placed_bids}/>}
      </div>
    </>
      );
}
