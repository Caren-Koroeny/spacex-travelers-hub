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
        <NavLink to="/"
        style={({ isActive }) => ({
          color: isActive ? '	#6495ED' : 'none',
          fontWeight: isActive ? '700' : 'regular',
          textDecoration: isActive ? 'underline': 'none',
        })}
        >
        Rockets
        </NavLink>
        <NavLink to="/missions"
        style={({ isActive }) => ({
          color: isActive ? '	#6495ED' : 'none',
          fontWeight: isActive ? '700' : 'regular',
          fontSize: isActive ? 'underline': 'none',
        })}
        >
        Missions
        </NavLink>
        <div>|</div>
        <NavLink to="/myprofile"
        style={({ isActive }) => ({
          color: isActive ? '	#6495ED' : 'none',
          fontWeight: isActive ? '700' : 'regular',
          fontSize: isActive ? 'underline': 'none',
        })}
        >  
        My Profile
        </NavLink>
      </nav>
    </header>
    <hr />
  </>

);

export default Navigation;
