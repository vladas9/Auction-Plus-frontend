import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAuth({ setIsAdminAuthenticated }) {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminName === 'admin' && password === 'adminpass') {
      setIsAdminAuthenticated(true);
      navigate('/admin');
    } else {
      alert("Are you admin?");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <input 
          type="text" 
          placeholder="Admin Name" 
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
