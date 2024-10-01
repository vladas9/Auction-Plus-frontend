import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PostlotPage.module.css";

export default function Post() {
  if (!localStorage.getItem("auth-token")){
    window.location.replace("/login");
    return(
      <>
        Redirecting...
      </>
    )
  }
  const navigate = useNavigate();
  const [terms, setTerms]=useState(false);
  const [error, setError]=useState()
  const [photos, setPhotos]=useState(null);
  const [formData, setFormData]=useState({
    title:"Title from the form",
    description:"abracadabra description",
    start_price:122,
    category_name:"furniture",
    lot_condition:"new",
    end_date:"2024-10-30T13:34",
    img_src:[]
  })
  var convertImages = (e) =>{
    var img_src=[];
    
    console.log(e.target.files);
    
    Array.from(e.target.files).map(value=>{
      var reader = new FileReader();
      reader.onloadend = function(){
        var base64String = reader.result.split(",")[1];
        img_src.push(base64String);
      }
      reader.readAsDataURL(value);
    })
    setFormData({...formData, img_src: img_src});

  }

  var handleChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({...formData, [name]: value});
    
  }

  var submit = async (e) => {
    e.preventDefault();
    
    if (!terms) {
      setError("You must agree with the conditions to post the auction.");
      return;
    }false
    if (formData.img_src.length<1) {
      setError("You must upload a photo!");
      return;
    }
    setError("");
    postLot();
  };
  const postLot = async () =>{
    var updatedDate = formData.end_date.concat(":00Z");
    var toSend = {...formData, end_date:updatedDate};
    console.log(toSend)
    await fetch("http://localhost:1169/api/auction/post",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("auth-token")}`
      },
      body: JSON.stringify(toSend)


    }).then(res =>{
      console.log(res)
      return res.json();
    }).then(data=>{
      if(data.auctionId){
        console.log("your lot is posted now", data.auctionId)
      }else{
        throw new Error(data.error_message);
      }
    }).catch(err=>{
      console.error(err.message)
    })
  }  
  return (
    <div className={styles.postLotContainer}>
      <h2 className={styles.title}>Place a lot</h2>
      <form onSubmit={submit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            name="title"
            type="text"
            placeholder="Title Input"
            value={formData.title}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="description"
            placeholder="Description Input"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <input
            name="start_price"
            type="number"
            placeholder="Price"
            value={formData.start_price}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Choose the date and time</label>
          <input
            name="end_date"
            type="datetime-local"
            min={new Date().toISOString().slice(0,16)}
            value={formData.end_date}
            onChange={handleChange}
            required
            className={styles.input}
          />
         
        </div>
        
        <div className={styles.selectionGroup}>
          <div>
            <label className={styles.label}>Choose the lot condition</label>
            <div>
              <input
                name="lot_condition"
                type="radio"
                value="new"
                id="new"
                onChange={handleChange}
                required
            
              />
              <label htmlFor="new">New</label>
            </div>
            <div>
              <input
                name="lot_condition"
                type="radio"
                value="old"
                id="old"
                onChange={handleChange}
                required
              />
              <label htmlFor="Old">Old</label>
            </div>
          </div>
          <div className={styles.filterField}>
          <label>Category</label>
            <select
                name="category_name"
                value={formData.category_name}
                onChange={handleChange}
                className={styles.filterInput}
            >
                <option value="">Select a category</option>
                <option value="furniture">Furniture</option>
                <option value="real estate">Real Estate</option>
                <option value="electronics">Electronics</option>
                <option value="arts">Arts</option>
                <option value="others">Others</option>
            </select>
          </div>
        </div>
        

        <div className={styles.inputGroup}>
          <label htmlFor="photos" className={styles.label}>Upload photos</label>
          <input
            name="photos"
            type="file"
            id="photos"
            checked={photos}
            multiple
            onChange={convertImages}
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
