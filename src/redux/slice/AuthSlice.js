import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const registerAuth = createAsyncThunk("/register", async (formData) => {
  let res = await axiosInstance.post("/register", formData);
  let resData = res?.data;
  return resData;
});

export const LoginAuth = createAsyncThunk("/login", async (formData) => {
  let res = await axiosInstance.post("/login", formData);
  let resData = res?.data;
  return resData;
});

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    status: status.idle,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAuth.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(registerAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
      })
      .addCase(registerAuth.rejected, (state) => {
        state.status = status.error;
      })

      .addCase(LoginAuth.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(LoginAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
      })
      .addCase(LoginAuth.rejected, (state) => {
        state.status = status.error;
      });
  },
});

export default AuthSlice.reducer;
