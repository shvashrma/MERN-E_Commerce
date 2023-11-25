import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import sellerSlice from "./Slices/SellerAccount";

const store = configureStore({
  reducer: { user: userSlice, seller: sellerSlice },
});

export default store;
