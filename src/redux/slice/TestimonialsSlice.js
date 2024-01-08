import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const TestimonialsItems = createAsyncThunk("/testimonial", async () => {
  let res = await axiosInstance.get("/testimonial");
  let resData = res?.data;
  return resData;
});

const TestimonialsSlice = createSlice({
  name: "TestimonialsSlice",
  initialState: {
    status: status.idle,
    testimonialsItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TestimonialsItems.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(TestimonialsItems.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.testimonialsItems = payload.testimonials;
      })
      .addCase(TestimonialsItems.rejected, (state) => {
        state.status = status.error;
      });
  },
});

export default TestimonialsSlice.reducer;
