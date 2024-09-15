import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    const toggleNotif = () => {
        setIsNotifOpen(!isNotifOpen);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Search Query:', searchQuery);
            setSearchQuery('');
        }
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        console.log("User signed out");
    };

    return (
      <div className="navbar-container">
        <nav className="top-navbar">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search here" 
                value={searchQuery} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="search-input"
              />
            </div>
            <div className="navbar-icons">
              <button className="notif-button" onClick={toggleNotif}>
                <i className="fas fa-bell"></i>
              </button>
              {isNotifOpen && (
                <ul className="notif-menu">
                  <li><Link to="/">Notif 1</Link></li>
                  <li><Link to="/">Notif 2</Link></li>
                  <li><Link to="/">Notif 3</Link></li>
                </ul>
              )}

              <div className="auth">
                {isAuthenticated ? (
                  <>
                    <button onClick={handleSignOut} className="exiting">Sign Out</button>
                    <Link to="/profile">
                      <i className="fas fa-user"></i>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
        </nav>

        <div className="navbar-wrapper">
          <nav className="left-navbar">
            <ul>
                <li>
                  <Link to="/" className="nav-icon">
                    <i className="fas fa-home"></i> Homepage
                  </Link>
                </li>
                <li>
                  <Link to="/private-session">
                    <i className="fas fa-key"></i> Private auction
                  </Link>
                </li>
                <li>
                  <Link to="/items">
                    <i className="fas fa-table"></i> Items table
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <i className="fas fa-cog"></i> Settings
                  </Link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Navbar;
