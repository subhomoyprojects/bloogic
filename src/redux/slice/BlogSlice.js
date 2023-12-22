import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const BlogLists = createAsyncThunk("/allBlog", async () => {
  let res = await axiosInstance.get("/allBlog");
  let resData = res?.data;
  return resData;
});

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogStatus: status.idle,
    blogItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BlogLists.pending, (state) => {
        state.blogStatus = status.loading;
      })
      .addCase(BlogLists.fulfilled, (state, { payload }) => {
        state.blogStatus = status.idle;
        state.blogItems = payload.data;
        console.log(payload.data);
      })
      .addCase(BlogLists.rejected, (state) => {
        state.blogStatus = status.error;
      });
  },
});

export default BlogSlice.reducer;
