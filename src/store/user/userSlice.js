import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
  buyersAmount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
        const {displayName, email, photoURL} = action.payload
      return {
        ...state,
        displayName,
        email,
        photoURL,
      };
    },
    setBuyersAmount(state, action) {
      return {
        ...state,
        buyersAmount: action.payload,
      };
    },
  },
});

export const { setUserInfo, setBuyersAmount } = userSlice.actions;

export default userSlice.reducer;
