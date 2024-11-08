import React, { useState } from "react";
import styles from "../../styles/AdminHomePage.module.css";
import { useOutletContext } from "react-router-dom";

export default function AdminUsersTable() {
  const { users, setUsers, selectedUserId, setSelectedUserId } = useOutletContext();
  const [banDuration, setBanDuration] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const banOptions = [
    "1 hour", "1 day", "15 days", "1 month", "3 months", "6 months", "1 year", "forever"
  ];

  const handleBanUser = (id) => {
    const userToBan = users.find((user) => user.id === id);

    if (userToBan.banned) {
      console.log("User was unbanned");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, banned: false } : user
        )
      );
    } else {
      setSelectedUserId(id === selectedUserId ? null : id);
    }
  };

  const handleBanSelection = (duration) => {
    setBanDuration(duration);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId ? { ...user, banned: true } : user
      )
    );
    setSelectedUserId(null);
    setBanDuration("");
    console.log(duration + " ban for user with ID: " + selectedUserId);
  };

  const handleCancelBan = () => {
    setSelectedUserId(null);
    setBanDuration("");
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.searchFilter}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.filterButton}>Filter</button>
      </div>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Complaints</th>
            <th>Bought Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.userAvatar}>👤</div>
              </td>
              <td>{user.name}</td>
              <td>
                <button className={styles.complaintsButton}>
                  {user.complaints} complaints
                </button>
              </td>
              <td>
                <button className={styles.itemsButton}>
                  {user.boughtItems} Bought items
                </button>
              </td>
              <td>
                <button
                  className={styles.banButton}
                  onClick={() => handleBanUser(user.id)}
                >
                  {user.banned ? "Unban" : "Ban"}
                </button>
                {selectedUserId === user.id && !user.banned && (
                  <div className={styles.banMenu}>
                    <p>Select ban duration:</p>
                    {banOptions.map((option) => (
                      <div
                        key={option}
                        className={styles.banOption}
                        onClick={() => handleBanSelection(option)}
                      >
                        {option}
                      </div>
                    ))}
                    <button
                      className={styles.cancelButton}
                      onClick={handleCancelBan}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
