import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";

const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
  },
});

export default Store;
