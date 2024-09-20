import React from "react";
import styles from "../styles/Settings.module.css";

export default function Settings() {
    const handleDeliting=()=>{
        console.log("User deleted his account");
    }
    const handleAppeal=()=>{
        console.log("He dare to write us something");
    }

  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.intro}>
          <h1>Settings</h1>
        </div>
        <div className={styles.options}>
            <div className={styles.unimportant_options}>
            <button className={styles.unimportant}>Getting started</button>
            <button className={styles.unimportant}>Sustain us</button>
                <button className={styles.unimportant}>About us</button>
                <button className={styles.unimportant}>Help</button>
            </div>
            <div className={styles.important_options}>
                <button className={styles.important} onClick={handleAppeal}>Appeal</button>
                <button className={styles.important} onClick={handleDeliting}>Delete account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
