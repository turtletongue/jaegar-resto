import Dish from "./Dish";

export default interface OrderItem {
  _id: number;
  item: Dish;
  qty: number;
  note: string;
}
