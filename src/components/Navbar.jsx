import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          //Now it shows just a message. Latter it can be sent to server
          console.log('Search Query:', searchQuery);
          setSearchQuery('');
      }
  };

    return (
      <nav>
          <ul className="navbar">
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
            <li><Link to="/private">Private Auction</Link></li>
              <Link>
                <i className="fas fa-bell"></i>
              </Link>
            <li><div className="auth"><Link to="/login">Login</Link> <Link to="/regis">Register</Link></div></li>
            <Link to="/profile">
                <i className="fas fa-user"></i>
            </Link>
          </ul>
      </nav>
    );
}

export default Navbar;
