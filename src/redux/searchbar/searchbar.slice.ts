import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchbarState {
  value: string;
}

const initialState: SearchbarState = {
  value: "",
};

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;
