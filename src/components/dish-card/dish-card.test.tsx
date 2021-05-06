import { render } from "@testing-library/react";
import DishCard from "./dish-card.component";

test("renders without crashing", () => {
  const { baseElement } = render(<DishCard />);
  expect(baseElement).toBeDefined();
});
