import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";
import BlogSlice from "./slice/BlogSlice";
import TestimonialsSlice from "./slice/TestimonialsSlice";
import TeamSlice from "./slice/TeamSlice";

const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Blog: BlogSlice,
    Testimonials: TestimonialsSlice,
    Team: TeamSlice,
  },
});

export default Store;
