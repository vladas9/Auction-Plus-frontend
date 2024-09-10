import React, { useState, useEffect } from 'react';
import styles from "../styles/Lotpage.module.css";
import LotDisplay from '../components/LotDisplay/LotDisplay';
import LotClosedPopup from "../components/LotClosedPopup/LotClosedPopup";

const Lot = () => {

  
  const [lotEnded, setLotEnded] = useState(false);
  const winner = { name: "John Doe" };
  const lot = { max_bid: 100 };

  // Simply to simulate server response by setting lotEnded to true after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLotEnded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setLotEnded(false);
  };

  return (
    <div className={styles.lot}>
      <LotDisplay />

      {lotEnded && (
        <LotClosedPopup winner={winner} lot={lot} onClose={handleClosePopup}/>
      )}
    </div>
  );
};

export default Lot;
