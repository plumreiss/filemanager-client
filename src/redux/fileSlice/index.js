import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
};

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFiles: (state, action) => {
      state.files = action.payload;
    },
  },
});

export const { addFiles } = fileSlice.actions;
export default fileSlice.reducer;
