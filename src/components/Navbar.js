import React from 'react';
import Header from './Header';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styling/NavBar.module.css';

const Navigation = () => (
  <div>
  <Header />
  <nav className={styles.navLinks}>
  <NavLink to="/">Rockets</NavLink>
  <NavLink to="/missions">Missions</NavLink>
  <NavLink to="/myprofile"> | My Profile</NavLink>
</nav>
<Outlet />
</div>

   
 
);

export default Navigation;
