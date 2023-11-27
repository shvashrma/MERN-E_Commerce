import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import sellerSlice from "./Slices/sellerSlice";
import productSlice from "./Slices/productSlice";

const store = configureStore({
  reducer: { user: userSlice, seller: sellerSlice, product: productSlice },
});

export default store;
