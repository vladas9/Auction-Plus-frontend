import React, { useState } from "react";
import PlacedBidsTable from "../components/PlacedBidsTable/PlacedBidsTable";
import PlacedLotsTable from "../components/PlacedLotsTable/PlacedLotsTable";
import styles from "../styles/Itemstable.module.css"


export default function Itemstable() {
    const [placedItems, setplacedItems]=useState(true)

    var placed_bids=[
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 2",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 50,
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 12",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": true,
          "max_bid": 50,
          "top_bidder_username": "username2"
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 42",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 60,
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
          "lot_name": "Name of lot 32",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 50,
          "top_bidder_username": "username1"
        },
          
      ]
      var placed_lots=[
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 12",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 50,
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 62",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": true,
          "max_bid": 50,
          "top_bidder_username": "username2"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 21",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 60,
          "top_bidder_username": "username1"
        },
        {
          "photo": "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          "lot_name": "Name of lot 2",
          "start_price": 44,
          "end_date": "dd:mm:yy",
          "closed": false,
          "max_bid": 530,
          "top_bidder_username": "username3"
        },
      ]
      
  return (
    <><div className={styles.profile__tables}>
    <div className={styles.profile__tables__buttons}>
      <div style={placedItems?{backgroundColor:"red"}:{backgroundColor:"white"}} onClick={()=>setplacedItems(true)}>Placed Bids</div>
      <div style={!placedItems?{backgroundColor:"red"}:{backgroundColor:"white"}} onClick={()=>setplacedItems(false)}>Placed Lots</div>
    </div>
    
    {placedItems?<PlacedBidsTable bids={placed_bids}/>:<PlacedLotsTable lots={placed_lots}/>}
</div></>
      );
}
