import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
  price: 0,
};

export const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {
    AddBit: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.price = action.payload.price;
    },
  },
});

export const { AddBit } = bidSlice.actions;

export default bidSlice.reducer;
