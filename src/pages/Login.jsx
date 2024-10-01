import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { BidContext } from "../context/BidContext";

export default function Login() {
  const { saveProfilePic, setUserType } = useContext(BidContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    var login_data = {
      "email": email,
      "password": password
    }
    await fetch("http://localhost:1169/api/user/login", {
      method: "POST",
      body: JSON.stringify(login_data)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      console.log(res)
      throw new Error("Something went wrong")
    }).then(data => {
      console.log(data)
      localStorage.setItem("auth-token", data.auth_token);
      saveProfilePic(data.img_url);
      setUserType(data.uset_type);
            navigate('/');
    }).catch(err => {
      console.error(err.message)
    })

  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.wallpaper}>
      <div className={styles.container}>
        <form onSubmit={login}>
          <div className={styles.intro}>
            <h2>We are happy you come back!</h2>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
