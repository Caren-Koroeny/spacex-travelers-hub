import React from 'react'
import Navigation from "./Navbar";
import planetImage from "../assets/planet1.png"
import styles from "../styling/Header.modules.css"
const Header = () => {
    return ( 
        <header>
        <div className={styles.navHeader}>
        <div className={styles.logoSection}>
        <img
        src={planetImage}
        alt="logo"
        className="planet-logo"
        height="50"
        width="50"
        />
        <h2>Space Travelers Hub</h2>
        </div>
        <Navigation />
        </div>
        <hr />
        </header>

     );
}
 
export default Header;