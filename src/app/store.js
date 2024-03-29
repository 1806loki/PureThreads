import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/ProductListSlice";
import authReducer from "../features/auth/AuthSlice";
import cartReducer from "../features/cart/CartSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
