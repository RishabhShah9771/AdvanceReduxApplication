import { createSlice } from "@reduxjs/toolkit";

const userInterfaceSlice = createSlice({
  name: "userInterface",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = userInterfaceSlice.actions;
export default userInterfaceSlice;
