import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMission = createAsyncThunk('missions/getMissions', async () =>{
    const response = await axios(baseUrl);
    return response.data;
});

const initialState = {
    mission: [],
    status: 'idle',
    error: null,
}

const missionSlice = createSlice({
    name:'missions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMission.fulfilled, (state, action) => {
                state.mission = action.payload;
                state.status = 'approved';

            })
            .addCase(getMission.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getMission.rejected, (state, action) => {
                state.status =" failed";
                state.error = action.error.message;
            });
    },
});
export default missionSlice.reducer;