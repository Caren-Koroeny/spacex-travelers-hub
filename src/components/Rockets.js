import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketData } from '../redux/rockets/rocketSlice';
import styling from '../styling/Rocket.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector((state) => state.rockets.rocketListData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRocketData());
    }
  }, [status, dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <ul key={rocket.id}>
          <img src={rocket.flickr_images} alt="rocket" className={styling.image} />
          <li>{rocket.name}</li>
          <li>{rocket.description}</li>
        </ul>
      ))}
    </>
  );
};

export default Rockets;
