import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    si,
  },
});