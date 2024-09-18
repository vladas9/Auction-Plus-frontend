import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar">
          <ul>
              <li>
                <Link to="/" className="nav-icon">
                <span className="material-symbols-outlined">grid_view</span><span className="dis">Homepage</span>
                </Link>
              </li>
              <li>
                <Link to="/private-session">
                <span className="material-symbols-outlined">lock</span> <span className="dis">Private auction</span>
                </Link>
              </li>
              <li>
                <Link to="/items">
                <span className="material-symbols-outlined">assignment</span> <span className="dis">Items table</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                <span className="material-symbols-outlined">settings</span> <span className="dis">Settings</span>
                </Link>
              </li>
          </ul>
        </nav>
    </div>
  );
}


export default Navbar;
