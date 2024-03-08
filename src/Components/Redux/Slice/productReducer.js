import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AllProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { AllProduct } = productSlice.actions;

export default productSlice.reducer;
