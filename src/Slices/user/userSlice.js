import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  photo: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.uid = action.payload.uid;
      state.photo = action.payload.photo;
    },
    setLogOut: (state) => {
      state.uid = null;
      state.photo = null;
    },
  },
});

export const { setLogIn, setLogOut } = UserSlice.actions;

export const selectUid = (state) => state.user.uid;
export const selectPhoto = (state) => state.user.photo;

export default UserSlice.reducer;
