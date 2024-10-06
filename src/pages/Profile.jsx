import React, { useContext, useEffect, useState} from "react";
import styles from "../styles/Profile.module.css";
import { Doughnut, Bar } from "react-chartjs-2";
import { BidContext } from "../context/BidContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

export default function Profile() {
  if (!localStorage.getItem("auth-token")){
    window.location.replace("/login");
    return(
      <>
        Redirecting...
      </>
    )
  }
  const {profilePicUrl}=useContext(BidContext);
  const [error, setError]=useState(null);
  const [loading, setLoading]=useState(true);
  const [user_data, setUserData]=useState(null);
  useEffect(()=>{
    const fetchData= async ()=>{
      await fetch("http://localhost:1169/api/user/profile-data", {
        method:"GET",
        headers:{
          Authorization:`Bearer ${localStorage.getItem("auth-token")}`,
        },
      }).then(res=>{
        return res.json();
      }).then(data=>{
            console.log(data);
        setUserData(data);
      }).catch(err=>{
        console.log(err);
        setError(err.message);
      }).finally(()=>{
        setLoading(false);
      })
    }
    fetchData();
  },[]);
  if(loading){
    return (
      <>
        Loading...
      </>
    )
  }
  if (error) {
    return (
      <>
        Error: {error}
      </>)
  }
  // var user_data = {
  //   "img_url": "link.jpg",
  //   "username": "username",
  //   "email": "user@gmail.com",
  //   "phone_number": "+373 78 888 888",
  //   "creation_date": "2023-06-09T13:34:15+03:00",
  //   "bought_stats": {
  //     "labels": ["cat1", "cat2", "cat3", "cat4", "cat5"],
  //     "data": [21, 23, 34, 56, 67]
  //   },
  //   "sold_stats": {
  //     "labels": ["cat1", "cat2", "cat3", "cat4", "cat5"],
  //     "data": [21, 23, 34, 56, 67]
  //   },
  //   "price_range_stats": {
  //     "labels": ["0-100$", "100-200$", "200-300$", "300-400$", "400-500$"],
  //     "sold_data": [21, 23, 34, 56, 67],
  //     "bought_data": [21, 23, 34, 56, 67]
  //   }
  // }

  const regDate = new Date(user_data.creation_date);
  const currentDate = new Date();
  const accountAgeMonths = (currentDate.getFullYear() - regDate.getFullYear()) * 12 + currentDate.getMonth() - regDate.getMonth();

  const boughtData = {
    labels: user_data.stats.bought_stats.labels,
    datasets: [
      {
        borderRadius: 6,
        label: "Items bought",
        data: user_data.stats.bought_stats.data,
        backgroundColor: ["#FF3A20", "#29ADB2", "#C5E898", "#0766AD", "#F3F3F3"],
        hoverOffset: 40,
      },
    ],
  };

  const soldData = {
    labels: user_data.stats.sold_stats.labels,
    datasets: [
      {
        borderRadius: 6,
        label: "Items sold",
        data: user_data.stats.sold_stats.data,
        backgroundColor: ["#FF3A20", "#29ADB2", "#C5E898", "#0766AD", "#F3F3F3"],
        hoverOffset: 40,
      },
    ],
  };

  const barData = {
    labels: user_data.stats.price_range_stats.labels,
    datasets: [
      {
        type: "bar",
        borderRadius: 6,
        label: "Bought lots",
        data: user_data.stats.price_range_stats.bought_data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#0766AD",
      },
      {
        type: "bar",
        label: "Sold lots",
        borderRadius: 6,
        fill: false,
        data: user_data.stats.price_range_stats.sold_data,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "#C5E898",
      },
    ],
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.edit_part}>
            <h1>My profile</h1>
            <button className={styles.edit}>Edit profile</button>
          </div>
          <div className={styles.profile__info}>
            <div
              className={styles.profile__info__photo}
              style={{ backgroundImage: `url("${profilePicUrl}")` }}
            ></div>
            
            <div className={styles.profile__info__text}>
              <div className={styles.profile__info__header}>

                <span>{user_data.username}</span>
              </div>
              <div className={styles.profile__info__item}>
                <span class="material-symbols-outlined">mail</span>
                <span>{user_data.email}</span>
              </div>
              <div className={styles.profile__info__item}>
                <span className="material-symbols-outlined">call</span>
                <span>{user_data.phone_number}</span>
              </div>
              <div className={styles.profile__info__item}>
                <span>Profile age: {accountAgeMonths} months</span>
              </div>
            
            </div>
          </div>

          <div className={styles.statistics}>
            <h1 className={styles.statistics__header}>Statistics</h1>
            <div className={styles.charts}>
              <div className={styles.chartBox}>
                <h3>Bought items</h3>
                {boughtData.datasets[0].data.length > 0 ? <Doughnut data={boughtData} /> : <p className={styles.no_data_message}>Consider buying some items</p>}
              </div>
              <div className={styles.chartBox}>
                <h3>Sold items</h3>
                {soldData.datasets[0].data.length > 0 ? <Doughnut data={soldData} />: <p className={styles.no_data_message}>Consider selling some items</p>}
              </div>
            </div>
            <div className={styles.barChart}>
              <Bar data={barData} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
