import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
          <ul className="navbar">
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/userpage">UserPage</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/lot">Lot</Link></li>
            <li><Link to="/private">Private</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
      </nav>
    );
}

export default Navbar;
