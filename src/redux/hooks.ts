import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DineType } from "../interfaces/DineType";
import Dish from "../interfaces/Dish";
import {
  Category,
  changeSelectedCategory,
} from "./categories/categories.slice";
import { changeActiveTab, Tab } from "./left-menu/left-menu.slice";
import {
  addNote,
  addOrderItem,
  changeDineType,
  changeQty,
  removeOrderItem,
} from "./order/order.slice";
import { changeValue } from "./searchbar/searchbar.slice";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActiveTab = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.leftMenu.activeTab);
  const setActiveTab = (tab: Tab) => {
    dispatch(changeActiveTab(tab));
  };

  return { activeTab, setActiveTab };
};

export const useSelectedCategory = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.categories.selectedCategory
  );
  const setSelectedCategory = (category: Category) => {
    dispatch(changeSelectedCategory(category));
  };

  return { selectedCategory, setSelectedCategory };
};

export const useDineType = () => {
  const dispatch = useAppDispatch();
  const dineType = useAppSelector((state) => state.order.dineType);
  const setDineType = (dineType: DineType) => {
    dispatch(changeDineType(dineType));
  };

  return { dineType, setDineType };
};

export const useOrderItems = () => {
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector((state) => state.order.orderItems);
  const setQty = (orderItemId: number, qty: number) => {
    dispatch(changeQty({ id: orderItemId, qty }));
  };
  const appendOrderItem = (dish: Dish) => {
    dispatch(addOrderItem(dish));
  };
  const deleteOrderItem = (orderItemId: number) => {
    dispatch(removeOrderItem(orderItemId));
  };
  const addOrderItemNote = (orderItemId: number, note: string) => {
    dispatch(addNote({ id: orderItemId, note }));
  };

  return {
    orderItems,
    setQty,
    appendOrderItem,
    deleteOrderItem,
    addOrderItemNote,
  };
};

export const useSearchbar = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.searchbar.value);
  const setValue = (newValue: string) => {
    dispatch(changeValue(newValue));
  };

  return {
    value,
    setValue,
  };
};
