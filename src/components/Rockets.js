import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { fetchRocketData, reserveRocket } from '../redux/rockets/rocketSlice';
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
        <ul key={rocket.id} className={styling.container}>
          <img src={rocket.flickr_images} alt="rocket" className={styling.image} />
          <div className={styling.contain}>
            <p>
              <Badge bg={rocket.reserved ? ('info') : ('secondary')}>
                {rocket.reserved ? ('Reserved') : ('')}
              </Badge>
              {`${rocket.description}`}
            </p>
            <Button
              type="button"
              variant={rocket.reserved ? ('outline-secondary') : ('btn btn-primary')}
              size="md"
              onClick={() => dispatch(reserveRocket(rocket.id))}
            >
              {rocket.reserved ? ('Cancel Reservation') : ('Reserve Rocket')}
            </Button>
          </div>
        </ul>
      ))}
    </>
  );
};

export default Rockets;
