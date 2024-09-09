import React from "react";
import styles from "../styles/Profile.module.css"
import { useState } from "react";
import PlacedBidsTable from "../components/PlacedBidsTable/PlacedBidsTable";
export default function Profile(){
    const [placedItems, setplacedItems]=useState(true)
    var user={
        photo_url:"https://avatars.githubusercontent.com/u/103861986?v=4",
        username:"Starplatinum",
        email:"example@email.com",
        phone_number:"079999999"
    }
    var placed_lots=[
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
        "lot_name": "Name of lot 2",
        "start_price": 44,
        "end_date": "dd:mm:yy",
        "closed": true,
        "max_bid": 50,
        "top_bidder_username": "username2"
      },
      {
        "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
        "lot_name": "Name of lot 2",
        "start_price": 44,
        "end_date": "dd:mm:yy",
        "closed": false,
        "max_bid": 60,
        "top_bidder_username": "username1"
      },
      {
        "photo": "https://unblast.com/wp-content/uploads/2020/06/Data-Map-Visualization-UI-Template.jpg",
        "lot_name": "Name of lot 2",
        "start_price": 44,
        "end_date": "dd:mm:yy",
        "closed": false,
        "max_bid": 50,
        "top_bidder_username": "username1"
      },
        
      ]
      
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.profile__info}>
                    <div className={styles.profile__info__photo} style={{backgroundImage:`url("${user.photo_url}")`}}></div>
                    <div className={styles.profile__info__text}>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.phone_number}</div>
                        <div>{Date()}</div>
                    </div>
                </div>
                <div className={styles.profile__tables}>
                    <div className={styles.profile__tables__bids}>Placed Bids</div>
                    <div className={styles.profile__tables__lots}>Placed Lots</div>
                    <PlacedBidsTable lots={placed_lots}/>
                    {/*placedItems?<PlacedBidsTable lots={placed_lots}/>:<PlacedLotsTable/>*/}
                </div>
            </div>
        </>
    )
}