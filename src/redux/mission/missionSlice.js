/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios(BASE_URL);
  const missions = response.data.map((mission) => ({ ...mission, reserved: false }));
  return missions;
});

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
  reserved: []
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = !mission.reserved;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleReservation } = missionsSlice.actions;
export const selectMissions = (state) => state.missions.missions;
export const selectMissionsStatus = (state) => state.missions.status;
export const selectMissionsError = (state) => state.missions.error;
export const selectReservedMissions = (state) => state.missions.missions.filter((mission) => mission.reserved);
export default missionsSlice.reducer;
