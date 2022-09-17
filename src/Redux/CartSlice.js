import { createSlice } from "@reduxjs/toolkit";
import { cartItem } from "../products";

export const cartSlice = createSlice({
  name: "CartItem",
  initialState: {
    value: cartItem,
  },
  reducers: {
    addcartItem: (state, action) => {
      if (action.payload) {
        state.value.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      if (action.payload) {
        const newItem = state.value.filter((item) => item.id !== action.payload.id)
        state.value = newItem;
      }
    }
  }
})

export const { addcartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
