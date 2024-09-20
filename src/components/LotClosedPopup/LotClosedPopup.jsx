import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./LotClosedPopup.module.css";

const LotClosedPopup = ({ winner, lot: max_bid, onClose }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h2 className={styles.title}>Lot Closed</h2>
        <p className={styles.message}>
          The winner is <strong>{winner.name}</strong> with a bid of <strong>${max_bid}</strong>
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={onClose} className={styles.closeBtn}>Close</button>
          <button onClick={handleGoHome} className={styles.homeBtn}>Go Home</button>
        </div>
      </div>
    </div>
  );
};

export default LotClosedPopup;