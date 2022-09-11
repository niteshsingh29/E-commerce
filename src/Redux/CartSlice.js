import { createSlice } from "@reduxjs/toolkit";
import { cartItem } from "../products";

export const cartSlice = createSlice({
  name: "CartItem",
  initialState: {
    value: cartItem,
  },
  reducers: {
    addcartItem: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.value.push(action.payload)
      }
    }
  }
})

export const { addcartItem } = cartSlice.actions;
export default cartSlice.reducer;
