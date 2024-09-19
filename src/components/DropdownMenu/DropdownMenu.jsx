import React from "react"
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./DropdownMenu.module.css"

import '@fortawesome/fontawesome-free/css/all.min.css';
export default function DropdownMenu(props){
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };
    const signOut = () =>{
        localStorage.removeItem('auth-token');
        window.location.replace("/");
    }

    return(<>
        {localStorage.getItem('auth-token') ? (
            <div className={styles.user_menu} onClick={toggleUserMenu}>
                <img src={props.pfp_url} alt="User" />
                <i className="fas fa-chevron-down"></i>
            </div>
            ) : (
                <div className={styles.navbar_auth_links}>
                  <Link to="/login">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
        )}

        {isUserMenuOpen && (
            <ul className={`${styles.user_dropdown} ${styles.show}`}>
              <li><Link onClick={toggleUserMenu} to="/profile" className={styles.toProfile}>Profile</Link></li>
              <li><button onClick={signOut}>Sign Out</button></li>
            </ul>
        )}
    </>)
}