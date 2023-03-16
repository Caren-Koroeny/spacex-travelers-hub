import React from "react";

const Profile = () => {
  return(
    <div className="container">
    <div className="profileContainer">
      <div className="myMissions">
        <h2>My Missions</h2>
        <div className="cardsContainer">{}</div>
      </div>
      <div className="myRockets">
        <h2>My Rockets</h2>
        <div className="cardsContainer">{}</div>
      </div>
    </div>
  </div>
  );
}

export default Profile;
