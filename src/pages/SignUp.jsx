import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css"
import {BidContext} from "./../context/BidContext";

export default function RegistrationForm() {
  const {saveProfilePic, setUserType} = useContext(BidContext);

  const [formData, setFormData] = useState({
    username: "user",
    email: "admin@mail.ru",
    password: "admin",
    repeatPassword: "admin",
    phone_number: "12354",
    address: "adress",
    paymentDetails: "",
    isHuman: true,
    img_src: '',
    user_type:"client" //or "admin"
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" || name === "repeatPassword") {
      setPasswordMismatch(formData.password !== value && formData.repeatPassword !== value);
    }
  };
  
  const convertImage = (e) => {
    const file =  e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      var base64String = reader.result.split(",")[1];
      setFormData({ ...formData, img_src: base64String });
    };
    reader.readAsDataURL(file);
  };

  const register = async (e) => {
    e.preventDefault();
    
    var responseData;
    
    await fetch("http://localhost:1169/api/register-user",{
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),

    }).then((res)=>{
      return res.json();
    })
    .then((data)=>{
      responseData=data;
      console.log(responseData)
    })

    if (responseData.error) {
      console.log(responseData.error)
    } else {
      localStorage.setItem('auth-token', responseData.auth_token);
      saveProfilePic(responseData.img_src);
      setUserType(responseData.user_type)
      navigate("/");
    }
  };

  const clear = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone_number: "",
      address: "",
      paymentDetails: "",
      isHuman: true,
      img_src: null,
    });
    setPasswordMismatch(false);
  };


  return (
    <div className={styles.wallpaper}>
      <div className={styles.container}>
        <form>
          <div className={styles.intro}> 
            <h2>Only one step left to discover something new!</h2> 
          </div>
          <p>User Name</p>
          <input type="text"  name="name" value={formData.username} onChange={handleChange} placeholder="Name"  required/>
          <p>Email</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
          <p>Password</p>
          <input type="password" name="password" value={formData.password}  onChange={handleChange}  placeholder="Password"  required/>
          <p>Repeat Password</p>
          <input  type="password"  name="repeatPassword"  value={formData.repeatPassword}  onChange={handleChange}  placeholder="Repeat Password" required className={`${passwordMismatch ? styles.error : ''}`}/>
          <p>Phone Number</p>
          <input  type="number"  name="phone_number"  value={formData.phone_number}  onChange={handleChange}  placeholder="Phone Number" pattern="[0-9]*"  required/>
          <p>Adress</p>
          <input  type="text"  name="address"  value={formData.address}  onChange={handleChange}  placeholder="Address"  required/>
          <div className={styles.fileUpload}>
            <label className={styles.uploadButton}>
              Upload profile image
              <input type="file" onChange={convertImage} />
            </label>
            {formData.img_src && <p className={styles.fileStatusMessage}>Profile Image Uploaded</p>}
          </div>
          {passwordMismatch && <span className={styles.helperText}>Passwords do not match</span>}

          <div className={styles.actions}>
            <button  className={styles.submitButton}  disabled={!formData.isHuman || passwordMismatch || !formData.img_src} onClick={register}>
              Register
            </button>
            <button  className={styles.clearButton}  onClick={clear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}