import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SuccessPage.module.css";

export default function SuccessPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.successContainer}>
      <h2 className={styles.title}>Auction was created successfully!</h2>
      <button onClick={handleBackToHome} className={styles.backBtn}>
        Back home
      </button>
    </div>
  );
}
