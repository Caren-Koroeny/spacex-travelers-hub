/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMission = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios(baseUrl);
  return response.data;
});

const initialState = {
  mission: [],
  status: 'idle',
  error: null,
  reserved: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIndex = state.mission.findIndex(
        (missions) => missions.mission_id === action.payload,
      );
      if (missionIndex !== -1) {
        const joinedMission = state.mission[missionIndex];
        joinedMission.reserved = !joinedMission.reserved;
      }
    },

    reservedMission: (state) => {
      const missions = state.mission.filter(
        (missions) => missions.reserved === true,
      );
      return { ...state, reserved: missions };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMission.fulfilled, (state, action) => {
        state.mission = action.payload;
        state.status = 'approved';
      })
      .addCase(getMission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, reservedMission } = missionSlice.actions;
export default missionSlice.reducer;
