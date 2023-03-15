import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styling/Mission.module.css';
import { getMission, joinMission } from '../redux/mission/missionSlice';

const Mission = () => {
  const { mission } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  const joinMissionText = {
    true: 'Leave Mission',
    false: 'Join Mission',
  };

  function displayJoinMission(status) {
    return joinMissionText[status];
  }

  const joinedMissionhandler = (id) => dispatch(joinMission(id));

  const renderMissionItems = () => mission.map((item) => (
    <div className={styles.missionItems} key={item.mission_id}>
      <div className={styles.missionHead}>
        <h3>{item.mission_name}</h3>
      </div>
      <div className={styles.missionInfo}>
        <p>{item.description}</p>
      </div>
      <div className={styles.buttons}>
        {item.reserved ? (
          <button
            type="button"
            className={styles.activeMemberBtn}
          >
            Active Member
          </button>
        ) : (
          <button
            type="button"
            className={styles.notActivememberBtn}
          >
            NOT A MEMBER
          </button>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={
          item.reserved
            ? styles.leaveMissionBtn
            : styles.joinMissionBtn
        }
          onClick={() => joinedMissionhandler(item.mission_id)}
        >
          {displayJoinMission(item.reserved)}
        </button>
      </div>
    </div>
  ));

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
      {renderMissionItems()}
    </section>
  );
};

export default Mission;
