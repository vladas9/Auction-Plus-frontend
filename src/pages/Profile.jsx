import React from "react";
import styles from "../styles/Profile.module.css";
import { Doughnut, Bar } from "react-chartjs-2";
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
  var user = {
    photo_url: "https://avatars.githubusercontent.com/u/103861986?v=4",
    username: "I am the auction boss",
    email: "boss@email.com",
    phone_number: "079999999",
    reg_date: "12.10.2020",
  };

  const regDate = new Date(user.reg_date);
  const currentDate = new Date();
  const accountAgeMonths = (currentDate.getFullYear() - regDate.getFullYear()) * 12 + currentDate.getMonth() - regDate.getMonth();

  const boughtData = {
    labels: ["Furniture", "Real estate", "Electronics", "Arts", "Other"],
    datasets: [
      {
        borderRadius: 6,
        label: "Items bought",
        data: [200, 50, 100, 40, 78],
        backgroundColor: ["#FF3A20", "#29ADB2", "#C5E898", "#0766AD", "#F3F3F3"],
        hoverOffset: 40,
      },
    ],
  };

  const soldData = {
    labels: ["Furniture", "Real estate", "Electronics", "Arts", "Other"],
    datasets: [
      {
        borderRadius: 6,
        label: "Items sold",
        data: [200, 50, 100, 40, 78],
        backgroundColor: ["#FF3A20", "#29ADB2", "#C5E898", "#0766AD", "#F3F3F3"],
        hoverOffset: 40,
      },
    ],
  };

  const barData = {
    labels: ["0-100 $", "101-200 $", "201-300 $", "301-400 $", "401-500 $"],
    datasets: [
      {
        type: "bar",
        borderRadius: 6,
        label: "Bought lots",
        data: [10, 20, 30, 40, 80],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#0766AD",
      },
      {
        type: "bar",
        label: "Sold lots",
        borderRadius: 6,
        data: [50, 50, 50, 30, 15],
        fill: false,
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
              style={{ backgroundImage: `url("${user.photo_url}")` }}
            ></div>
            
            <div className={styles.profile__info__text}>
              <div className={styles.profile__info__header}>

                <span>{user.username}</span>
              </div>
              <div className={styles.profile__info__item}>
                <span class="material-symbols-outlined">mail</span>
                <span>{user.email}</span>
              </div>
              <div className={styles.profile__info__item}>
                <span class="material-symbols-outlined">call</span>
                <span>{user.phone_number}</span>
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
                <Doughnut data={boughtData} />
              </div>
              <div className={styles.chartBox}>
                <h3>Sold items</h3>
                <Doughnut data={soldData} />
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
