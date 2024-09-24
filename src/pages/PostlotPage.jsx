import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PostlotPage.module.css";

export default function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [photos, setPhotos] = useState(null);
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(`${date}T${time}`);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      setError("You cannot select a past date or time.");
      return;
    }

    if (!terms) {
      setError("You must agree with the conditions to post the auction.");
      return;
    }

    if (!photos) {
      setError("You must upload a photo!");
      return;
    }

    setError("");
    console.log({ title, description, price, date, time, photos, terms });

    navigate("/success");
  };

  return (
    <div className={styles.postLotContainer}>
      <h2 className={styles.title}>Place a lot</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Title Input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            placeholder="Description Input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Choose the date and time</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="photos" className={styles.label}>Upload photos</label>
          <input
            type="file"
            id="photos"
            checked={photos}
            multiple
            onChange={(e) => setPhotos(e.target.files)}
            className={styles.input}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.termsGroup}`}>
          <input
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={() => setTerms(!terms)}
            className={styles.checkbox}
          />
          <label htmlFor="terms" className={styles.label}>
            Agree with conditions of lot posting
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn}>Post</button>
      </form>
    </div>
  );
}
