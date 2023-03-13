import React from 'react';
import { NavLink } from 'react-router-dom';
import sitelogo from '../assets/planet1.png';
import styles from '../styling/Navbar.module.css';

const Navigation = () => (
  <>
    <header className={styles.headerSection}>
      <section className={styles.logoSection}>
        <img src={sitelogo} alt="logo" className={styles.logo} />
        <h1>Space Travelers Hub</h1>
      </section>
      <nav className={styles.navLinks}>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <div>|</div>
        <NavLink to="/myprofile">  My Profile</NavLink>
      </nav>
    </header>
    <hr />
  </>

);

export default Navigation;
