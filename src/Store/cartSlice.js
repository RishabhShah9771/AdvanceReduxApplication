import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for the cart using createSlice from Redux Toolkit
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: { items: [], totalQuantity: 0, changed: false }, // Initial state of the cart
  reducers: {
    // Reducer to replace the entire cart (used for syncing with backend)
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity; // Set total quantity from payload
      state.items = action.payload.items; // Set items array from payload
    },
    // Reducer to add an item to the cart
    addItemToCart(state, action) {
      const newItem = action.payload; // The item to add (from action payload)
      // Find if the item already exists in the cart
      const existingItem = (state.items || []).find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++; // Increment total quantity
      state.changed = true; // Mark cart as changed
      if (!existingItem) {
        // If item does not exist, add it to the cart
        state.items.push({
          id: newItem.id, // Item ID
          price: newItem.price, // Item price
          quantity: 1, // Start with quantity 1
          totalPrice: newItem.price, // Total price for this item
          name: newItem.title || newItem.name, // Use title or name for display
        });
      } else {
        // If item exists, increment its quantity and total price
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    // Reducer to remove an item from the cart
    removeItemFromCart(state, action) {
      const id = action.payload; // ID of the item to remove
      // Find the existing item in the cart
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--; // Decrement total quantity
      state.changed = true; // Mark cart as changed
      if (!existingItem) {
        // If item does not exist, do nothing
        return;
      }
      if (existingItem.quantity === 1) {
        // If only one left, remove the item from the cart
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // If more than one, decrement quantity and total price
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
