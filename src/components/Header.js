import React from 'react'
import Navigation from "./Navbar";
import planetImage from "../assets/planet1.png"
const Header = () => {
    return ( 
        <header>
        <div className="">
        <img
        src={planetImage}
        alt="logo"
        className="planet-logo"
        height="50"
        width="50"
        />
        <h2>Space Travelers Hub</h2>
     
        <Navigation />
        </div>
        <hr />
        </header>

     );
}
 
export default Header;