import { render } from "@testing-library/react";
import Dish from "../../interfaces/Dish";
import DishCard from "./dish-card.component";

test("renders without crashing", () => {
  const mockDish: Dish = {
    _id: -1,
    title: "Something",
    price: 2.12,
    category: "hot",
    count: 0,
    imageUrl: "url",
  };
  const { baseElement } = render(<DishCard dish={mockDish} />);
  expect(baseElement).toBeDefined();
});
