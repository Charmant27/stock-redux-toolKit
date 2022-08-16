import { createSlice } from "@reduxjs/toolkit";
import { stockItems } from "../../stockItems";

const initialState = {
  stockItems: stockItems,
  amount: 2,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearStock: (state) => {
      state.stockItems = [];
    },
    remove: (state, action) => {
      const stockId = action.payload;
      state.stockItems = state.stockItems.filter((item) => item.id !== stockId);
    },
    increase: (state, action) => {
      const stockId = action.payload;
      const stockItem = state.stockItems.find((item) => item.id === stockId);
      stockItem.amount = stockItem.amount + 1;
    },
    decrease: (state, action) => {
      const stockId = action.payload;
      const stockItem = state.stockItems.find((item) => item.id === stockId);
      stockItem.amount = stockItem.amount - 1;
    },
    total: (state) => {
      let amount = 0;
      let total = 0;
      state.stockItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { clearStock, remove, increase, decrease, total } =
  cartSlice.actions;

export default cartSlice.reducer;
