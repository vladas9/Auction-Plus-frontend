import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Private.module.css';

const MOCK_RESULT = true;

const PrivateSession = () => {
  const [entryCode, setEntryCode] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setEntryCode(value);
      setError(false);
    }
  };

  const handleCheck = () => {
    if (MOCK_RESULT) {
      navigate(`/private-session/${entryCode}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.postLotContainer}>
      <h1 className={styles.title}>Private Auction Session</h1>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Enter session code</label>
          <input
            type="text"
            placeholder="Session code"
            value={entryCode}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <button className={styles.submitBtn} onClick={handleCheck}>
          Check
        </button>
        {error && <p className={styles.error}>Session not found. Please check the code and try again.</p>}
      </div>
    </div>
  );
};

export default PrivateSession;
