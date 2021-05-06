import { render } from "@testing-library/react";
import DishEditCard from "./dish-edit-card.component";

test("renders without crashing", () => {
  const { baseElement } = render(<DishEditCard />);
  expect(baseElement).toBeDefined();
});
