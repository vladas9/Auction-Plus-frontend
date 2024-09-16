import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar">
          <ul>
              <li>
                <Link to="/" className="nav-icon">
                  <i className="fas fa-home"></i> <span>Homepage</span>
                </Link>
              </li>
              <li>
                <Link to="/private-session">
                  <i className="fas fa-key"></i> <span>Private auction</span>
                </Link>
              </li>
              <li>
                <Link to="/items">
                  <i className="fas fa-table"></i> <span>Items table</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <i className="fas fa-cog"></i> <span>Settings</span>
                </Link>
              </li>
          </ul>
        </nav>
    </div>
  );
}


export default Navbar;
