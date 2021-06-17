import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      name: "Test",
      description: "This is first item and it is great",
      price: 6.69,
    },
    {
      id: "p2",
      name: "Second",
      description: "This is Second item",
      price: 3.93,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
});

export const productsActions = productSlice.actions;

export default productSlice.reducer;
