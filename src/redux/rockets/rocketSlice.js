import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketListData: [],
  status: 'idle',
  error: null,
};

export const fetchRocketData = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, payload) => ({
      ...state,
      rocketListData: state.rocketListData.map((rocketData) => {
        if (rocketData.id === payload.payload) {
          if (rocketData.reserved === true) {
            return { ...rocketData, reserved: false };
          }
          return { ...rocketData, reserved: true };
        }
        return rocketData;
      }),
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchRocketData.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchRocketData.fulfilled, (statte, action) => ({
        rocketListData: action.payload.map((rocketData) => ({
          id: rocketData.id,
          name: rocketData.name,
          description: rocketData.description,
          flickr_images: rocketData.flickr_images,
        })),
        status: 'loading',
      }))
      .addCase(fetchRocketData.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
