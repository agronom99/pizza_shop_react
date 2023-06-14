import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
    removeItem(state, action) {
      state.item.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.item = [];
    },
  },
});

export const { addItem,removeItem,clearItem } =
  cartSlice.actions;

export default cartSlice.reducer;
