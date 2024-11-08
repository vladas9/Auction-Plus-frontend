import React, { useState } from "react";
import styles from "../../styles/AdminHomePage.module.css"; // Adjust path to match your folder structure

const initialLots = [
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

export default function AdminLotsTable() {
  const [lots, setLots] = useState(initialLots);

  const handleDeleteLot = (id) => {
    setLots((prevLots) => prevLots.filter((lot) => lot.id !== id));
    console.log("Lot with ID:", id, "was deleted");
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.tableContainer}>
        <table className={styles.lotsTable}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Max Bid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lots.map((lot) => (
              <tr key={lot.id}>
                <td><img src={lot.photo} alt={lot.name} className={styles.lotImage} /></td>
                <td>{lot.name}</td>
                <td>{lot.price}</td>
                <td className={lot.status === "opened" ? styles.opened : styles.closed}>
                  {lot.status}
                </td>
                <td>{lot.maxBid}</td>
                <td><button onClick={() => handleDeleteLot(lot.id)} className={styles.deleteButton}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
