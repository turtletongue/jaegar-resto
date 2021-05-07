import leftMenuReducer, {
  changeActiveTab,
  LeftMenuState,
} from "./left-menu.slice";

describe("left-menu reducer", () => {
  it("should change tab", () => {
    const mockState: LeftMenuState = {
      activeTab: "home",
    };

    expect(
      leftMenuReducer(mockState, {
        type: "left-menu/changeActiveTab",
        payload: "settings",
      })
    ).toEqual({ activeTab: "settings" });
  });
});

describe("left-menu actions", () => {
  it("should return correct object", () => {
    expect(changeActiveTab("settings")).toEqual({
      type: "left-menu/changeActiveTab",
      payload: "settings",
    });
  });
});
