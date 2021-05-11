import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DineType } from "../../interfaces/DineType";
import Dish from "../../interfaces/Dish";
import OrderItem from "../../interfaces/OrderItem";

export interface OrderState {
  orderItems: OrderItem[];
  dineType: DineType;
}

const initialState: OrderState = {
  orderItems: [],
  dineType: "Dine In",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeDineType: (state, action: PayloadAction<DineType>) => {
      state.dineType = action.payload;
    },
    addOrderItem: (state, action: PayloadAction<Dish>) => {
      const existingIndex = state.orderItems.findIndex(
        (orderItem) => orderItem.item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.orderItems[existingIndex].qty++;
      } else {
        state.orderItems.push({
          _id: state.orderItems[state.orderItems.length - 1]?._id + 1 || 1,
          item: action.payload,
          qty: 1,
          note: "",
        });
      }
    },
    changeQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const { id, qty } = action.payload;
      state.orderItems = state.orderItems.map((orderItem) =>
        orderItem._id === id ? { ...orderItem, qty } : orderItem
      );
    },
    addNote: (state, action: PayloadAction<{ id: number; note: string }>) => {
      const { id, note } = action.payload;
      state.orderItems = state.orderItems.map((orderItem) =>
        orderItem._id === id ? { ...orderItem, note } : orderItem
      );
    },
    removeOrderItem: (state, action: PayloadAction<number>) => {
      state.orderItems = state.orderItems.filter(
        (orderItem) => orderItem._id !== action.payload
      );
    },
  },
});

export const {
  changeDineType,
  addOrderItem,
  addNote,
  changeQty,
  removeOrderItem,
} = orderSlice.actions;
export default orderSlice.reducer;
