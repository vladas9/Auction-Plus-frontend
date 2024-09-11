import React, { useState } from "react";
import styles from "../styles/AdminHomePage.module.css";

const users = [
  { id: 1, name: "John Doe", complaints: 2, boughtItems: 5 },
  { id: 2, name: "Jane Smith", complaints: 0, boughtItems: 8 },
  { id: 3, name: "Mike Johnson", complaints: 1, boughtItems: 3 },
  { id: 4, name: "Anna Williams", complaints: 4, boughtItems: 2 },
];

const lots = [
  {
    id: 1,
    photo: "https://www.shutterstock.com/image-vector/wood-chair-isolated-illustration-on-600nw-146198417.jpg",
    name: "Antique Chair",
    price: "120$",
    postDate: "12.12.2023",
    closeDate: "20.12.2023",
    status: "opened",
    maxBid: "150$ from user1",
  },
  {
    id: 2,
    photo: "https://www.shutterstock.com/image-vector/wood-chair-isolated-illustration-on-600nw-146198417.jpg",
    name: "Vintage Table",
    price: "80$",
    postDate: "10.12.2023",
    closeDate: "18.12.2023",
    status: "closed",
    maxBid: "Sold for 100$",
  },
];

export default function Admin() {
  const [selectedSection, setSelectedSection] = useState("users");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [banDuration, setBanDuration] = useState("");

  const banOptions = [
    "1 hour",
    "1 day",
    "15 days",
    "1 month",
    "3 months",
    "6 months",
    "1 year",
    "forever"
  ];

  const handleBanUser = (id) => {
    setSelectedUserId(id === selectedUserId ? null : id);
  };

  const handleBanSelection = (duration) => {
    setBanDuration(duration);
    console.log(selectedUserId);
    console.log(duration);
    setSelectedUserId(null); 
  };

  const handleCancelBan = () => {
    setSelectedUserId(null);
  };

  const handleDeleteLot = (id) => {
    
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div onClick={() => setSelectedSection("users")} className={styles.divItem}>
          Users
        </div>
        <div onClick={() => setSelectedSection("lots")} className={styles.divItem}>
          Lots
        </div>
      </div>

      <div className={styles.content}>
        {selectedSection === "users" && (
          <div>
            <div className={styles.searchFilter}>
              <input type="text" placeholder="Search" className={styles.searchInput} />
              <button className={styles.filterButton}>
                Filter
              </button>
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
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className={styles.userAvatar}>👤</div>
                    </td>
                    <td>{user.name}</td>
                    <td>
                      <button className={styles.complaintsButton}>
                        {user.complaints} compl
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
                        ban
                      </button>
                      {selectedUserId === user.id && (
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
        )}

        {selectedSection === "lots" && (
          <div>
            <div className={styles.searchFilter}>
              <input type="text" placeholder="Search lots" className={styles.searchInput} />
              <button className={styles.searchButton}>
                Filter
              </button>
            </div>

            <table className={styles.lotsTable}>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Lot Name</th>
                  <th>Price</th>
                  <th>Post Date</th>
                  <th>Closing Date</th>
                  <th>Status</th>
                  <th>Max Bid</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lots.map((lot) => (
                  <tr key={lot.id}>
                    <td>
                      <img src={lot.photo} alt="lot" className={styles.lotImage} />
                    </td>
                    <td>{lot.name}</td>
                    <td>{lot.price}</td>
                    <td>{lot.postDate}</td>
                    <td>{lot.closeDate}</td>
                    <td className={lot.status === "opened" ? styles.opened : styles.closed}>
                      {lot.status}
                    </td>
                    <td>{lot.maxBid}</td>
                    <td>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDeleteLot(lot.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
