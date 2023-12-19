import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";
import { toast } from "react-toastify";

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
    isLogin: false,
  },
  reducers: {
    tokenCheck: (state) => {
      let getToken = localStorage.getItem("token");
      if (getToken !== null && getToken !== undefined) {
        state.isLogin = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAuth.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(registerAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        if (payload.success) {
          toast.success(`${payload.message}`);
          localStorage.setItem("token", payload.token);
        } else {
          toast.error(`${payload.msg}`);
          state.status = status.error;
        }
      })
      .addCase(registerAuth.rejected, (state, { payload }) => {
        state.status = status.payload;
        const errorMessage = `${payload?.msg}` || "Registration failed. Please try again later.";
        toast.error(errorMessage);
      })

      .addCase(LoginAuth.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(LoginAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        console.log(payload.status);
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          state.isLogin = true;
          toast.success(`${payload.message}`);
        } else if (payload.status === 400) {
          toast.error(`${payload.message}`);
        } else {
          toast.error("Register failed");
        }
      })
      .addCase(LoginAuth.rejected, (state, { error }) => {
        state.status = status.error;
        toast.error(`${error.message}`);
      });
  },
});

export const { tokenCheck, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
