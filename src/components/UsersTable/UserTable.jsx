import React from "react";
import { useState } from "react";

function UserRow({user}){
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="user-row">
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <button className="delete-btn">x delete user</button>
          <button className="ban-btn">ban</button>
          <button className="toggle-btn" onClick={toggleExpand}>
            {isExpanded ? "See less... ↑" : "See more... ↓"}
          </button>
        </div>
  
        {isExpanded && (
          <div className="user-details">
            <div className="avatar">🧑</div>
            <div className="details">
              <div className="detail-item">
                <strong>No. of items:</strong> {user.items}
              </div>
              <div className="detail-item">
                <strong>Complaints:</strong> {user.complaints}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
export default function PlacedBidsTable(){
    const users = [
        { id: 1, name: "John Doe", items: 5, complaints: 2 },
        { id: 2, name: "Jane Smith", items: 3, complaints: 1 },
        { id: 3, name: "Alice Brown", items: 10, complaints: 0 },
        { id: 4, name: "Bob Johnson", items: 2, complaints: 4 },
        { id: 5, name: "Charlie Green", items: 8, complaints: 3 },
      ];
    return (
      <div className="user-table">
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    );
  };