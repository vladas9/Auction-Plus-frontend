import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { BidContext } from "../../context/BidContext";
import './Searchbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Searchbar({ isAuthenticated, setIsAuthenticated }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const {profilePicUrl}=useContext(BidContext);
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
            {localStorage.getItem('auth-token') ? (
              <Link to="/notif" className="notif-button" onClick={toggleNotif}>
                <i className="fas fa-bell"></i>
                {serverNotification && ( 
                  <span className="notif-indicator"></span>
                )}
              </Link>
            ) : <></>}
              {localStorage.getItem('auth-token') ? (
              <div className="user-menu" onClick={toggleUserMenu}>
                <img src={profilePicUrl} alt="User" />
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
    );
}

export default Searchbar;
