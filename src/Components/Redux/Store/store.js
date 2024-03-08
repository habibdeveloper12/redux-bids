import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/productReducer";
import bidReducer from "../Slice/bidProductReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    bid: bidReducer,
  },
});
