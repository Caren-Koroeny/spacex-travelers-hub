import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,

    rockets: rocketReducer,
  },
});

export default store;
