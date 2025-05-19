import { configureStore } from "@reduxjs/toolkit";
import userInterfaceSlice from "./uiSlice";
import cartSlice from "./cartSlice";

// Create the Redux store using Redux Toolkit's configureStore function
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // Assign the user interface slice reducer to the 'ui' key in the store
    ui: userInterfaceSlice.reducer,
    // Assign the cart slice reducer to the 'cart' key in the store
    cart: cartSlice.reducer,
  },
});

export default store;
