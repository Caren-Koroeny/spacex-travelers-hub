import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservedMission } from '../redux/mission/missionSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const bookedMission = useSelector((store) => store.missions.reserved);

  useEffect(() => {
    dispatch(reservedMission());
  }, [dispatch]);

  let displayMission = '';

  if (bookedMission.length) {
    displayMission = bookedMission.map((data) => (
      <li key={data.mission_id}>
        <span>{data.mission_name}</span>
      </li>
    ));
  }
  return (
    <div className="container">
      <div className="profileContainer">
        <div className="myMissions">
          <h2>My Missions</h2>
          <div className="cardsContainer">
            {displayMission ? <ul>{displayMission}</ul> : <p>No missions booked yet</p>}
          </div>
        </div>
        <div className="myRockets">
          <h2>My Rockets</h2>
          <div className="cardsContainer">{}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
