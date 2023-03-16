import React from "react";
import Navigation from "./Navbar";

const Profile = () => {
  return(
    <div className="container">
    <Navigation />
    <div className="profile-container">
    <div className="myMissions">
    <h2>My Missions</h2>
    <div className="cardsContainer">{}</div>
    </div>
    <div className="myRockets">
    <h2>My Rockets</h2>
    <div className="cardsContainer">{rocketsToRender}</div>
  </div>
    </div>
    </div>
  );
}

export default Profile;
