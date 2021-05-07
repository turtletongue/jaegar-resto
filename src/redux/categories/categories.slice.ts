import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = "hot" | "cold" | "soup" | "grill" | "dessert";

export interface CategoriesState {
  selectedCategory: Category;
}

const initialState: CategoriesState = {
  selectedCategory: "hot",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changeSelectedCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { changeSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
