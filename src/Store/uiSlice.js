import { createSlice } from "@reduxjs/toolkit";

const userInterfaceSlice = createSlice({
  name: "userInterface",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = userInterfaceSlice.actions;
export default userInterfaceSlice;
