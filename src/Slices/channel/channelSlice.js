import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folderId: null,
  folderName: null,
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolder: (state, action) => {
      state.folderId = action.payload.folderId;
      state.folderName = action.payload.folderName;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export const selectFolderId = (state) => state.folder.folderId;
export const selectFolderName = (state) => state.folder.folderName;

export default folderSlice.reducer;
