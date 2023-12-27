import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";

export const BlogLists = createAsyncThunk("/allBlog", async () => {
  let res = await axiosInstance.get("/allBlog");
  let resData = res?.data;
  return resData;
});

export const CategoryLists = createAsyncThunk("/showallcategory", async () => {
  let res = await axiosInstance.get("/showallcategory");
  let resData = res?.data;
  return resData;
});

export const LatestPosts = createAsyncThunk("/letest-post", async () => {
  let res = await axiosInstance.get("/letest-post");
  let resData = res?.data;
  return resData;
});

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogStatus: status.idle,
    blogItems: [],
    categoryStatus: status.idle,
    categoryItems: [],
    latestStatus: status.idle,
    latestPosts: [],
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
      })

      .addCase(CategoryLists.pending, (state) => {
        state.categoryStatus = status.loading;
      })
      .addCase(CategoryLists.fulfilled, (state, { payload }) => {
        state.categoryStatus = status.idle;
        state.categoryItems = payload.data;
        console.log(payload.data);
      })
      .addCase(CategoryLists.rejected, (state) => {
        state.categoryStatus = status.error;
      })

      .addCase(LatestPosts.pending, (state) => {
        state.latestStatus = status.loading;
      })
      .addCase(LatestPosts.fulfilled, (state, { payload }) => {
        state.latestStatus = status.idle;
        state.latestPosts = payload.data;
        console.log(payload.data);
      })
      .addCase(LatestPosts.rejected, (state) => {
        state.latestStatus = status.error;
      });
  },
});

export default BlogSlice.reducer;
