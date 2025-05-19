import { configureStore } from "@reduxjs/toolkit";
import userInterfaceSlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    ui: userInterfaceSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
