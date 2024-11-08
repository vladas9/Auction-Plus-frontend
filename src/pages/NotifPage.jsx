import React from "react";
import Notification from "../components/Notification/Notification";
import styles from "../styles/NotifPage.module.css"

export default function NotificationsPage() {
  if (!localStorage.getItem("auth-token")){
    window.location.replace("/login");
    return(
      <>
        Redirecting...
      </>
    )
  }
  const notifications = [
    { type: "sold", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29bQT_PVcKkA8WTfG4RnqUbT_C8wkGrtnuA&s", lotId: "41", price: "2000", buyer: "User_1", isNew: true },
    { type: "bought", image: "https://nsk.muzmart.com/files/catalog/elektroakustik.jpg", lotId: "13", price: "1500", isNew: true },
    { type: "sold", image: "https://nsk.muzmart.com/files/catalog/elektroakustik.jpg", lotId: "1", price: "2000", buyer: "User_1", isNew: true },
    { type: "bought", image: "https://nsk.muzmart.com/files/catalog/elektroakustik.jpg", lotId: "12", price: "1500", isNew: true },
    { type: "sold", image: "https://nsk.muzmart.com/files/catalog/elektroakustik.jpg", lotId: "1", price: "2000", buyer: "User_1", isNew: false },
    { type: "bought", image: "https://nsk.muzmart.com/files/catalog/elektroakustik.jpg", lotId: "1", price: "1500", isNew: false },
  ];

  return (
    <div className={styles.wallpaper}>
        <div className={styles.main_container}>
            <div className={styles.intro}><h2>Notifications</h2></div>
            {notifications.map((notif, index) => (
                <Notification key={index} {...notif} />
            ))}
        </div>
    </div>
  );
}
