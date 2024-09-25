import React, { useState } from "react";
import { Outlet, Link, useLocation} from "react-router-dom";
import styles from "../styles/AdminHomePage.module.css";

const initialUsers = [
  { id: 1, name: "John Doe", complaints: 2, boughtItems: 5, banned: false },
  { id: 2, name: "Jane Smith", complaints: 0, boughtItems: 8, banned: false },
  { id: 3, name: "Mike Johnson", complaints: 1, boughtItems: 3, banned: false },
  { id: 4, name: "Anna Williams", complaints: 4, boughtItems: 2, banned: false },
];

export default function Admin() {
  
  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const location = useLocation();

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <Link to="users" className={styles.divItem}>
          Users
        </Link>
        <Link to="lots" className={styles.divItem}>
          Lots
        </Link>
      </div>
      <div className={styles.content}>
        {location.pathname === "/admin" ? (
          <div className={styles.welcomeMessage}>
            <h1 className={styles.welcomeTitle}>Welcome our dear admin</h1>
            <p className={styles.welcomeSubtitle}>it's time to delete and ban!</p>
          </div>
        ) : (
          <Outlet context={{ users, setUsers, selectedUserId, setSelectedUserId }} />
        )}
      </div>
    </div>
  );
}
