import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folderBool: false,
  modelBools: false,
  photo: false,
};

const booleanSlice = createSlice({
  name: "bool",
  initialState,
  reducers: {
    setBoolean: (state, action) => {
      state.folderBool = action.payload.folderBool;
      state.modelBools = action.payload.modelBools;
      state.photo = action.payload.photo;
    },
  },
});

export const { setBoolean } = booleanSlice.actions;

export const selectFolderBool = (state) => state.bool.folderBool;
export const selectModelBool = (state) => state.bool.modelBools;
export const selectPhotoBool = (state) => state.bool.photo;

export default booleanSlice.reducer;
