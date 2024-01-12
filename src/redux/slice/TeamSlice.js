import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const TeamAsyncThunk = createAsyncThunk("/team", async () => {
  let res = await axiosInstance.get("/team");
  let resData = res?.TeamMember;
  return resData;
});

const TeamSlice = createSlice({
  name: "TeamSlice",
  initialState: {
    status: status.idle,
    teamItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TeamAsyncThunk.pending, (state) => (state.status = status.loading))
      .addCase(TeamAsyncThunk.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.teamItems = payload.data;
      })
      .addCase(TeamAsyncThunk.rejected, (state) => (state.status = status.error));
  },
});

export default TeamSlice.reducer;
