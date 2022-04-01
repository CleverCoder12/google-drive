import { configureStore } from "@reduxjs/toolkit";
import boolReducer from "../Slices/Bool/boolSlice";
import photoReducer from "../Slices/photodisplay/photoSlice";
import userReducer from "../Slices/user/userSlice";
import folderReducer from "../Slices/channel/channelSlice";

export const store = configureStore({
  reducer: {
    bool: boolReducer,
    photos: photoReducer,
    user: userReducer,
    folder: folderReducer,
  },
});
