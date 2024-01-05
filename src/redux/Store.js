import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";
import BlogSlice from "./slice/BlogSlice";
import TestimonialsSlice from "./slice/TestimonialsSlice";

const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Blog: BlogSlice,
    Testimonials: TestimonialsSlice,
  },
});

export default Store;
