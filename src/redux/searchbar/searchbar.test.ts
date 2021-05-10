import searchbarReducer, { SearchbarState } from "./searchbar.slice";

describe("searchbar reducer", () => {
  it("should change input", () => {
    const mockState: SearchbarState = {
      value: "",
    };

    expect(
      searchbarReducer(mockState, {
        type: "searchbar/changeValue",
        payload: "a",
      })
    ).toEqual({
      value: "a",
    });
  });
});
