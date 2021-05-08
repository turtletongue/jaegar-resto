import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DineType } from "../interfaces/DineType";
import {
  Category,
  changeSelectedCategory,
} from "./categories/categories.slice";
import { changeActiveTab, Tab } from "./left-menu/left-menu.slice";
import { changeDineType } from "./order/order.slice";
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
  const dispatch = useDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.categories.selectedCategory
  );
  const setSelectedCategory = (category: Category) => {
    dispatch(changeSelectedCategory(category));
  };

  return { selectedCategory, setSelectedCategory };
};

export const useDineType = () => {
  const dispatch = useDispatch();
  const dineType = useAppSelector((state) => state.order.dineType);
  const setDineType = (dineType: DineType) => {
    dispatch(changeDineType(dineType));
  };

  return { dineType, setDineType };
};
