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
        (orderItem) => orderItem._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.orderItems[existingIndex].qty++;
      } else {
        state.orderItems.push({
          _id: state.orderItems.length + 1,
          item: action.payload,
          qty: 1,
          note: "",
        });
      }
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      if (state.orderItems[action.payload]) {
        state.orderItems[action.payload].qty++;
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      if (state.orderItems[action.payload]) {
        state.orderItems[action.payload].qty--;
      }
    },
    addNote: (state, action: PayloadAction<{ id: number; note: string }>) => {
      const { id, note } = action.payload;
      if (state.orderItems[id]) {
        state.orderItems[id].note = note;
      }
    },
    removeOrderItem: (state, action: PayloadAction<number>) => {
      state.orderItems = state.orderItems.filter(
        (orderItem) => orderItem._id !== action.payload
      );
    },
  },
});

export const { changeDineType, addOrderItem, addNote } = orderSlice.actions;
export default orderSlice.reducer;
