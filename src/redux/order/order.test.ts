import orderReducer, { OrderState } from "./order.slice";

describe("order reducer", () => {
  it("should change order type", () => {
    const mockState: OrderState = {
      orderItems: [],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, {
        type: "order/changeDineType",
        payload: "Dine Out",
      })
    ).toEqual({ orderItems: [], dineType: "Dine Out" });
  });

  it("should add dish in order list", () => {
    const mockState: OrderState = {
      orderItems: [],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, {
        type: "order/addOrderItem",
        payload: {
          _id: 1,
          title: "Spicy seasoned seafood noodles",
          price: 2.29,
          count: 20,
          category: "hot",
          imageUrl:
            "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
        },
      })
    ).toEqual({
      orderItems: [
        {
          _id: 1,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    });
  });

  it("should increment qty of order item if it exist", () => {
    const mockState: OrderState = {
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, {
        type: "order/addOrderItem",
        payload: {
          _id: 0,
          title: "Spicy seasoned seafood noodles",
          price: 2.29,
          count: 20,
          category: "hot",
          imageUrl:
            "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
        },
      })
    ).toEqual({
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 2,
          note: "",
        },
      ],
      dineType: "Dine In",
    });
  });

  it("should increment qty of order item", () => {
    const mockState: OrderState = {
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, { type: "order/incrementQty", payload: 0 })
    ).toEqual({
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 2,
          note: "",
        },
      ],
      dineType: "Dine In",
    });
  });

  it("should decrement qty of order item", () => {
    const mockState: OrderState = {
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 2,
          note: "",
        },
      ],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, { type: "order/decrementQty", payload: 0 })
    ).toEqual({
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    });
  });

  it("should add a note to order item", () => {
    const mockState: OrderState = {
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, {
        type: "order/addNote",
        payload: { id: 0, note: "abc" },
      })
    ).toEqual({
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "abc",
        },
      ],
      dineType: "Dine In",
    });
  });

  it("should remove order item", () => {
    const mockState: OrderState = {
      orderItems: [
        {
          _id: 0,
          item: {
            _id: 1,
            title: "Spicy seasoned seafood noodles",
            price: 2.29,
            count: 20,
            category: "hot",
            imageUrl:
              "https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png",
          },
          qty: 1,
          note: "",
        },
      ],
      dineType: "Dine In",
    };

    expect(
      orderReducer(mockState, { type: "order/removeOrderItem", payload: 0 })
    ).toEqual({
      orderItems: [],
      dineType: "Dine In",
    });
  });
});
