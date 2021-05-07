import categoriesReducer, {
  CategoriesState,
  changeSelectedCategory,
} from "./categories.slice";

describe("categories reducer", () => {
  it("should change category", () => {
    const mockState: CategoriesState = {
      selectedCategory: "hot",
    };

    expect(
      categoriesReducer(mockState, {
        type: "categories/changeSelectedCategory",
        payload: "cold",
      })
    ).toEqual({ selectedCategory: "cold" });
  });
});

describe("categories actions", () => {
  it("should return correct object", () => {
    expect(changeSelectedCategory("cold")).toEqual({
      type: "categories/changeSelectedCategory",
      payload: "cold",
    });
  });
});
