import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [privateActive, setPrivateActive] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

    const handlePrivateClick = () => {
        setPrivateActive(true);
        console.log("Private Auction Active:", privateActive);
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        console.log("User signed out");
    };

    return (
      <nav>
          <ul className="navbar">
            <li>
              <Link to="/" className="homee">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li>
              <button className="menu-button" onClick={toggleMenu}>≡</button>
              {isMenuOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/item1">Item 1</Link></li>
                  <li><Link to="/item2">Item 2</Link></li>
                  <li><Link to="/item3">Item 3</Link></li>
                </ul>
              )}
            </li>
            <li>
              <input 
                type="text" 
                placeholder="Search lot" 
                value={searchQuery} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="search-input"
              />
            </li>
            <li><Link to="/private" onClick={ handlePrivateClick }>Private Auction</Link></li>

            <li>
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
            </li>

            <li className="auth">
              {isAuthenticated ? (
                <button onClick={handleSignOut} className="exiting">Sign Out</button>
              ) : (
                <>
                  <Link to="/login">Login</Link> 
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </li>
            <li>
              <Link to="/profile">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          </ul>
      </nav>
    );
}

export default Navbar;
