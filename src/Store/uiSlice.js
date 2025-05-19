import { createSlice } from "@reduxjs/toolkit";

// Create a slice for user interface state management using Redux Toolkit
const userInterfaceSlice = createSlice({
  // Name of the slice
  name: "userInterface",
  // Initial state for the slice
  initialState: {
    cartIsVisible: false, // Determines if the cart UI is visible
    notification: null, // Holds notification data (status, title, message)
  },
  // Reducers define how the state can be updated
  reducers: {
    // Toggles the visibility of the cart
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    // Sets the notification object with provided status, title, and message
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status, // Notification status (e.g., 'success', 'error')
        title: action.payload.title, // Notification title
        message: action.payload.message, // Notification message
      };
    },
  },
});

export const uiActions = userInterfaceSlice.actions;
export default userInterfaceSlice;
