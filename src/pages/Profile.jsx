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
          "photo": "link_to_photo_1",
          "lot_name": "Name of lot 1",
          "price": 44,
          "currency": "$",
          "date": "dd:mm:yy",
          "closed": false,
          "current_price": 25,
          "bittenBySomebodyElse": false
        },
        {
          "photo": "link_to_photo_2",
          "lot_name": "Name of lot 2",
          "price": 44,
          "currency": "$",
          "date": "dd:mm:yy",
          "closed": false,
          "current_price": 50,
          "bittenBySomebodyElse": true
        },
        {
          "photo": "link_to_photo_3",
          "lot_name": "Name of lot 3",
          "price": 44,
          "currency": "$",
          "date": "dd:mm:yy",
          "closed": true,
          "current_price": 46,
          "bittenBySomebodyElse": true
        },
        {
          "photo": "link_to_photo_4",
          "lot_name": "Name of lot 4",
          "price": 44,
          "currency": "$",
          "date": "dd:mm:yy",
          "closed": true,
          "current_price": 46,
          "bittenBySomebodyElse": false
        },
        {
          "photo": "link_to_photo_5",
          "lot_name": "Name of lot 5",
          "price": 44,
          "currency": "$",
          "date": "dd:mm:yy",
          "closed": true,
          "current_price": 46,
          "bittenBySomebodyElse": false
        }
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
                    <PlacedBidsTable/>
                    {/*placedItems?<PlacedBidsTable lots={placed_lots}/>:<PlacedLotsTable/>*/}
                </div>
            </div>
        </>
    )
}