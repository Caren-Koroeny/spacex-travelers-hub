import React from 'react';
import styles from '../styling/Mission.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMission } from '../redux/mission/missionSlice';  

const Mission = () => {
  const dispatch =  useDispatch();
  useEffect(() => {
    dispatch(getMission())
  }, [dispatch])

  return (
    <section className={styles.missionContainer}>
    <div className={styles.headers}>
      <div>
        <h2>Mission</h2>
      </div>
      <div>
        <h2>Description</h2>
      </div>
      <div>
        <h2>Status</h2>
      </div>
      <div />
    </div>
  </section>
  )};

export default Mission;
