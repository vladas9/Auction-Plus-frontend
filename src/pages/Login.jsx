import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = true;

    if (result) {
      setIsAuthenticated(true); 
      navigate('/');
    } else {
      console.log("Login failed");
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.wallpaper}>
      <div className={styles.container}>
        <form onSubmit={handleLogin}>
          <div className={styles.intro}>
            <h2>We are happy you come back!</h2>
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton}>Login</button>
            <button type="button" className={styles.clearButton} onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}
