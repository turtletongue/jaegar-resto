import { render } from "@testing-library/react";
import DishImage from "./dish-image.component";

test("renders without crashing", () => {
  const { baseElement } = render(<DishImage src="abc" alt="abc" />);
  expect(baseElement).toBeDefined();
});
