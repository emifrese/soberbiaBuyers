import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyers: [],
};

export const buyersSlice = createSlice({
  name: "buyers",
  initialState,
  reducers: {
    getBuyers: (state, action) => {
      return {
        ...state,
        buyers: action.payload
      };
    },
    addBuyer: (state, action) => {
      return {
        ...state,
        buyers: state.buyers.push(action.payload),
      };
    },
    removeBuyer: (state, action) => {
      const buyersFiltered = state.buyers.filter(
        (buyer) => buyer.id !== action.payload
      );
      return {
        ...state,
        buyers: buyersFiltered,
      };
    },
  },
});

export const { getBuyers, addBuyer, removeBuyer } = buyersSlice.actions;

export default buyersSlice.reducer;
