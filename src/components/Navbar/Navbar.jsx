import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const serverNotification = true;

    const toggleNotif = () => {
        setIsNotifOpen(!isNotifOpen);
    };

    const toggleUserMenu = () => {
      setIsUserMenuOpen(!isUserMenuOpen);
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
        toggleUserMenu();
        console.log("User signed out");
    };

    return (
      <div className="navbar-container">
        <nav className="top-navbar">
            <div className="search-container">
              <i className="fas fa-search"></i>
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
            {isAuthenticated ? (
              <Link to="/notif" className="notif-button" onClick={toggleNotif}>
                <i className="fas fa-bell"></i>
                {serverNotification && ( 
                  <span className="notif-indicator"></span>
                )}
              </Link>
            ) : <></>}
              {isAuthenticated ? (
              <div className="user-menu" onClick={toggleUserMenu}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF3N6P457yFk4TVmhKfQbAX9zLsZiXyt1oQ&s" alt="User" />
                <i className="fas fa-chevron-down"></i>
              </div>
              ) : (
                <div className="navbar-auth-links">
                  <Link to="/login">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              )}

              {isUserMenuOpen && (
                <ul className="user-dropdown show">
                  <li><Link to="/profile" className="toProfile">Profile</Link></li>
                  <li><button onClick={handleSignOut}>Sign Out</button></li>
                </ul>
              )}
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
