import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categories.slice";
import leftMenuReducer from "./left-menu/left-menu.slice";
import orderReducer from "./order/order.slice";

const store = configureStore({
  reducer: {
    leftMenu: leftMenuReducer,
    categories: categoriesReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
