import React, { useState , useContext} from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { BidContext } from "../context/BidContext";

export default function Login({ setIsAuthenticated }) {
  const {saveProfilePic, setUserType}=useContext(BidContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    var login_data={
      "email":email,
      "password":password
    }
    await fetch("http://localhost:1169/api/login-user", {
      method: "POST",
      body:JSON.stringify(login_data)
    }).then(res=>{
      return res.json();
    }).then(data=>{
      localStorage.setItem("auth-token", data.auth_token);
      saveProfilePic(data.img_url);
      setUserType(data.uset_type);
    })
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
