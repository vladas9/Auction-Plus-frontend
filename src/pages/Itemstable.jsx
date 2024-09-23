import React, { useState, useEffect } from "react";
import PlacedBidsTable from "../components/PlacedBidsTable/PlacedBidsTable";
import PlacedLotsTable from "../components/PlacedLotsTable/PlacedLotsTable";
import styles from "../styles/Itemstable.module.css"
import { Link } from "react-router-dom";

export default function Itemstable() {
  const [placedItems, setplacedItems] = useState(true)

  return (
    <>
      <div className={styles.profile__tables}>
        <div className={styles.profile__tables__buttons}>
          <div className={styles.switch} style={placedItems ? { backgroundColor: "#fff" } : { backgroundColor: "#F3F3F3" }} onClick={() => setplacedItems(true)}>Placed Lots</div>
          <div className={styles.switch} style={!placedItems ? { backgroundColor: "#fff" } : { backgroundColor: "#F3F3F3" }} onClick={() => setplacedItems(false)}>Placed Bids</div>

          {placedItems ? (
            <Link className={styles.button__wrapper} to="/profile/postlot">
              <div className={styles.addlot_button}>+ Add Lot</div>
            </Link>) : <></>}

        </div>

        {placedItems ? <PlacedLotsTable /> : <PlacedBidsTable />}
      </div>
    </>
  );
}
