import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css"

export default function RegistrationForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    name: "user",
    email: "admin",
    password: "admin",
    repeatPassword: "admin",
    phoneNumber: "12354",
    address: "adress",
    paymentDetails: "",
    isHuman: true,
    pfpUploaded: null,
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [baseString, setBaseString]=useState('')
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });

    if (name === "password" || name === "repeatPassword") {
      setPasswordMismatch(
        formData.password !== value && formData.repeatPassword !== value
      );
    }
  };
  
  const handleFileUpload = (e) => {
    const file =  e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function () {
      setBaseString(reader.result.split(",")[1]);
      //console.log(baseString); 
    };
    reader.readAsDataURL(file);

    setFormData({ ...formData, pfpUploaded: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordMismatch) {
      
      return;
    }
    var send_to_server_data={
      "username": formData.username,
      "email": formData.email,
      "password": formData.password,
      "address": formData.address,
      "phone_number": formData.phoneNumber,
      "user_type":"client",
      "img_src": baseString
    }
    console.log(send_to_server_data)
    await fetch("http://localhost:1169/api/users/register",{
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(send_to_server_data),

    }).then((res)=>{
      //console.log(res)
      return res.json();
    })
    .then((data)=>{
      console.log(data)
      responseData=data;
    })

    const result = true; // Simulated backend response

    if (result) {
      setIsAuthenticated(true);
      navigate('/');
      //console.log("Registration successful:", formData);
    } else {
     //console.log("Registration failed");
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phoneNumber: "",
      address: "",
      paymentDetails: "",
      isHuman: false,
      pfpUploaded: null,
    });
    setPasswordMismatch(false);
  };


  return (
    <div className={styles.wallpaper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.intro}> 
            <h2>Only one step left to discover something new!</h2> 
          </div>
          <p>User Name</p>
          <input type="text"  name="name" value={formData.name} onChange={handleChange} placeholder="Name"  required  className={styles.input}/>
          <p>Email</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={styles.input}/>
          <p>Password</p>
          <input type="password" name="password" value={formData.password}  onChange={handleChange}  placeholder="Password"  required  className={styles.input}/>
          <p>Repeat Password</p>
          <input  type="password"  name="repeatPassword"  value={formData.repeatPassword}  onChange={handleChange}  placeholder="Repeat Password" required className={`${styles.input} ${passwordMismatch ? styles.error : ''}`}/>
          <p>Phone Number</p>
          <input  type="text"  name="phoneNumber"  value={formData.phoneNumber}  onChange={handleChange}  placeholder="Phone Number"  pattern="[0-9]*"  required  className={styles.input}/>
          <p>Adress</p>
          <input  type="text"  name="address"  value={formData.address}  onChange={handleChange}  placeholder="Address"  required  className={styles.input}/>
          <div className={styles.fileUpload}>
            <label className={styles.uploadButton}>
              Upload profile image
              <input type="file" onChange={handleFileUpload} />
            </label>
            {formData.pfpUploaded && <p className={styles.fileStatusMessage}>Profile Image Uploaded</p>}
          </div>
          {passwordMismatch && <span className={styles.helperText}>Passwords do not match</span>}

          <div className={styles.actions}>
            <button  type="submit"  className={styles.submitButton}  disabled={!formData.isHuman || passwordMismatch || !formData.pfpUploaded}>
              Register
            </button>
            <button  type="button"  className={styles.clearButton}  onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}