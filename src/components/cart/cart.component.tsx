import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { useDineType } from "../../redux/hooks";
import Button from "../button/button.component";
import CartItemsList from "../cart-items-list/cart-items-list.component";
import "./cart.styles.scss";

const primaryProps: { type: "primary" } = { type: "primary" };
const outlineProps: { type: "outline"; border: string } = {
  type: "outline",
  border: "1px solid #393C49",
};

const Cart = () => {
  // TODO: async thunk to get and calc order id
  const orderId = 34562;
  const { dineType, setDineType } = useDineType();
  return (
    <div className="cart-bg">
      <IonText className="cart-text cart-order-text">Orders #{orderId}</IonText>
      <IonGrid>
        <IonRow>
          <IonCol sizeMd="3">
            <Button
              {...(dineType === "Dine In" ? primaryProps : outlineProps)}
              height="2rem"
              onClick={() => setDineType("Dine In")}
            >
              Dine In
            </Button>
          </IonCol>
          <IonCol sizeMd="3">
            <Button
              {...(dineType === "Dine Out" ? primaryProps : outlineProps)}
              height="2rem"
              onClick={() => setDineType("Dine Out")}
            >
              To Go
            </Button>
          </IonCol>
        </IonRow>
        <IonRow className="cart-th-row">
          <IonCol sizeMd="8">
            <IonText className="cart-text cart-th-text">Item</IonText>
          </IonCol>
          <IonCol size="2">
            <IonText className="cart-text cart-th-text">Qty</IonText>
          </IonCol>
          <IonCol size="2">
            <IonText className="cart-text cart-th-text">Price</IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <CartItemsList
        orderItems={[
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
            qty: 2,
            note: "",
          },
        ]}
      />
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText className="cart-text cart-text-item">Discount</IonText>
          </IonCol>
          <IonCol>
            <IonText className="cart-text cart-end-text">$0</IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText className="cart-text cart-text-item">Sub total</IonText>
          </IonCol>
          <IonCol>
            <IonText className="cart-text cart-end-text">$21.03</IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <Button
              type="primary"
              width="100%"
              boxShadow="0 8px 24px rgba(234, 124, 105, 0.3)"
            >
              Continue to Payment
            </Button>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Cart;
