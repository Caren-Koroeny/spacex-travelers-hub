import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => (
  <header>
    <h1>Space Travelers Hub</h1>
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/myprofile"> | My Profile</NavLink>
    </nav>
    <Outlet />
  </header>
);

export default Navigation;
