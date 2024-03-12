import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";
import { toast } from "react-toastify";

export const CourseAsyncThunk = createAsyncThunk("/course", async () => {
  let res = await axiosInstance.get("/course");
  let resData = res?.data;
  return resData;
});

// export const CourseApplyAsyncThunk = createAsyncThunk("/course/apply", async (formData,id) => {
//   let res = await axiosInstance.post(`/course/${id}`, formData);
//   let resData = res?.data;
//   return resData;
// });

export const CourseApplyAsyncThunk = createAsyncThunk("/course/apply", async ({ payload, id }, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`courses/apply/${id}`, payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState: {
    courseStatus: status.idle,
    courseItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CourseAsyncThunk.pending, (state) => {
        state.courseStatus = status.loading;
      })
      .addCase(CourseAsyncThunk.fulfilled, (state, { payload }) => {
        state.courseStatus = status.idle;
        state.courseItems = payload.Courses;
      })
      .addCase(CourseAsyncThunk.rejected, (state) => {
        state.courseStatus = status.error;
      })

      .addCase(CourseApplyAsyncThunk.pending, (state) => {
        state.courseStatus = status.loading;
      })
      .addCase(CourseApplyAsyncThunk.fulfilled, (state, { payload }) => {
        state.courseStatus = status.idle;
        if (payload.success) {
          toast.success(`${payload.message}`);
        } else {
          toast.error(`${payload.message}`);
        }
      })
      .addCase(CourseApplyAsyncThunk.rejected, (state) => {
        state.courseStatus = status.error;
      });
  },
});

export default CourseSlice.reducer;
