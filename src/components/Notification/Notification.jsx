import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Notification.module.css";

export default function Notification({ type, image, lotId, price, buyer, isNew }) {
  const navigate = useNavigate();

  const handleViewLotClick = () => {
    navigate("/items");
  };

  const handleCheckoutClick = () => {
    navigate(`/lot/${lotId}`);
  };

  return (
    <div className={`${styles.notification} ${isNew ? styles.newNotification : styles.oldNotification}`}>
      <div className={styles.notificationContent}>
        <img src={image} alt="item" className={styles.image} />
        <div className={styles.text}>
          {type === "bought" ? (
            <p>You won the lot {lotId} with a bid of {price}$</p>
          ) : (
            <p>Item was sold to {buyer} for {price}$</p>
          )}
        </div>
        <div className={styles.button}>
          {type === "bought" ? (
            <button className={styles.checkoutButton} onClick={handleCheckoutClick}>Checkout</button>
          ) : (
            <button className={styles.viewLotButton} onClick={handleViewLotClick}>View lot</button>
          )}
        </div>
      </div>
    </div>
  );
}
