import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  isLoading: false,
  files: [],
};

const { API = "http://localhost:8000/api/v1" } = process.env;

export const fetchFileList = createAsyncThunk("/files/data", () => {
  const searchParams = new URLSearchParams(document.location.search);
  const fileName = searchParams.get("fileName");
  return axios
    .get(`${API}/files/data`, {
      params: fileName ? { fileName } : {},
    })
    .then((response) => response.data);
});

export const fileSlice = createSlice({
  name: "files",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFileList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.files = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFileList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFileList.rejected, (state, action) => {
      state.isLoading = false;
      state.files = [];
      state.error = action.error.message;
    });
  },
});

export const { addFiles } = fileSlice.actions;
export default fileSlice.reducer;
