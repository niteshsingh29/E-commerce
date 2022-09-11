import { createSlice } from "@reduxjs/toolkit";
import { myProduct } from "../products";

export const productSlice = createSlice({
  name: "myProduct",
  initialState: {
    value: myProduct,
  },
  reducers: {
    addProducts: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.value.push(action.payload)
      }
    }
  }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
