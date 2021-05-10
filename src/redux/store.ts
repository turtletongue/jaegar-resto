import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categories.slice";
import leftMenuReducer from "./left-menu/left-menu.slice";
import orderReducer from "./order/order.slice";
import searchbarReducer from "./searchbar/searchbar.slice";

const store = configureStore({
  reducer: {
    leftMenu: leftMenuReducer,
    categories: categoriesReducer,
    order: orderReducer,
    searchbar: searchbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
