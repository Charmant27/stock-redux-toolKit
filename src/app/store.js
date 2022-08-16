import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: stockReducer,
  },
});
