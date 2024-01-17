import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const searchAsyncThunk = createAsyncThunk("/search", async (formData) => {
  let res = await axiosInstance.post("/search", formData);
  let resData = res?.data;
  return resData;
});

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    searchState: status.idle,
    searchResult: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAsyncThunk.pending, (state) => {
        state.searchState = status.loading;
      })
      .addCase(searchAsyncThunk.fulfilled, (state, { payload }) => {
        state.searchState = status.idle;
        state.searchResult = payload.data;
      })
      .addCase(searchAsyncThunk.rejected, (state) => {
        state.searchState = status.error;
      });
  },
});

export default SearchSlice.reducer;
