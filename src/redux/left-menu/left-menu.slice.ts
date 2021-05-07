import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tab =
  | "home"
  | "discount"
  | "dashboard"
  | "message"
  | "notification"
  | "settings";

export interface LeftMenuState {
  activeTab: Tab;
}

const initialState: LeftMenuState = { activeTab: "home" };

const leftMenuSlice = createSlice({
  name: "left-menu",
  initialState,
  reducers: {
    changeActiveTab: (state, action: PayloadAction<Tab>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeActiveTab } = leftMenuSlice.actions;

export default leftMenuSlice.reducer;
