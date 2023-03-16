import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservedMission } from '../redux/mission/missionSlice';
import styling from '../styling/Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const bookedMission = useSelector((store) => store.missions.reserved);
  const bookedRocket = useSelector((state) => state.rockets.rocketListData);

  useEffect(() => {
    dispatch(reservedMission());
  }, [dispatch]);

  let displayMission = '';

  if (bookedMission.length) {
    displayMission = bookedMission.map((data) => (
      <li key={data.mission_id} className={styling.list}>
        <span>{data.mission_name}</span>
      </li>
    ));
  }

  return (
    <div>
      <div className={styling.container}>
        <div className="myMissions">
          <h2>My Missions</h2>
          <div className="cardsContainer">
            {displayMission
              ? <ul>{displayMission}</ul>
              : <p>No missions booked yet</p>}
          </div>
        </div>
        <div className="myRocket">
          <h2>My Rockets</h2>
          <div className="cardsContainer">
            {bookedRocket.filter((rocket) => rocket.reserved === true).length > 0 ? (
              bookedRocket.filter((rocket) => rocket.reserved === true).map((rocket) => (
                <ul key={rocket.id} className={styling.listing}>
                  <li key={rocket.id}>
                    <span>{rocket.name}</span>
                  </li>
                </ul>
              ))
            ) : <p>No rockets have been reserved</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
