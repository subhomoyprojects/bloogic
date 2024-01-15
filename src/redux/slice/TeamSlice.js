import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const TeamAsyncThunk = createAsyncThunk("/team", async () => {
  let res = await axiosInstance.get("/team");
  let resData = res?.data;
  return resData;
});

const TeamSlice = createSlice({
  name: "TeamSlice",
  initialState: {
    teamStatus: status.idle,
    teamItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TeamAsyncThunk.pending, (state) => {
        state.teamStatus = status.loading;
      })
      .addCase(TeamAsyncThunk.fulfilled, (state, { payload }) => {
        state.teamStatus = status.idle;
        state.teamItems = payload.TeamMember;
      })
      .addCase(TeamAsyncThunk.rejected, (state) => {
        state.teamStatus = status.error;
      });
  },
});

export default TeamSlice.reducer;
