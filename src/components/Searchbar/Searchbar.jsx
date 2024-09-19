import React, { useContext, useState } from "react";
import { BidContext } from "../../context/BidContext";
import './Searchbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import NotifIcon from "../NotifIcon/NotifIcon";

function Searchbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const {profilePicUrl}=useContext(BidContext);
    const has_notification = true;//comes from context
    

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
              {localStorage.getItem('auth-token')?<NotifIcon has_notification={has_notification}/>:<></>}
              <DropdownMenu pfp_url={profilePicUrl}/>
            </div>
        </nav>
    );
}

export default Searchbar;
