import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState: {
    courseStatus: status.idle,
    courseItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default CourseSlice.reducer;
