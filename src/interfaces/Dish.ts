import { Category } from "../redux/categories/categories.slice";

export default interface Dish {
  _id: number;
  title: string;
  price: number;
  count: number;
  category: Category;
  imageUrl: string;
}
