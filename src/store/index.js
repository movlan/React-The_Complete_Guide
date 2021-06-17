import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    ui: uiReducer,
  },
});

export default store;
