import {
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
  isPlatform,
} from "@ionic/react";
import Close from "../../icons/close.svg";
import OrderItem from "../../interfaces/OrderItem";
import Button from "../button/button.component";
import CartItemsList from "../cart-items-list/cart-items-list.component";
import "./cart.styles.scss";

const primaryProps: { type: "primary" } = { type: "primary" };
const outlineProps: { type: "outline"; border: string } = {
  type: "outline",
  border: "1px solid #393C49",
};

interface CartProps {
  orderId: number;
  dineType: string;
  setDineType: Function;
  orderItems: OrderItem[];
  onDismiss?: () => void;
  setQty: Function;
  deleteOrderItem: Function;
  addOrderItemNote: Function;
}

const Cart = ({
  orderId,
  dineType,
  setDineType,
  orderItems,
  onDismiss,
  ...otherProps
}: CartProps) => {
  const subTotal = orderItems
    .reduce((acc, orderItem) => {
      return acc + orderItem.qty * orderItem.item.price;
    }, 0)
    .toFixed(2);
  return (
    <div className="cart-bg">
      <div className="cart-head-container">
        <IonText className="cart-text cart-order-text">
          Orders #{orderId}
        </IonText>
        {isPlatform("mobile") && (
          <IonImg
            src={Close}
            alt="close"
            onClick={onDismiss}
            className="cart-close-icon"
          />
        )}
      </div>
      <IonGrid>
        <IonRow>
          <IonCol size="3" sizeXs="4">
            <Button
              {...(dineType === "Dine In" ? primaryProps : outlineProps)}
              height="2rem"
              onClick={() => setDineType("Dine In")}
            >
              Dine In
            </Button>
          </IonCol>
          <IonCol sizeMd="3" sizeXs="4">
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
      <CartItemsList orderItems={orderItems} {...otherProps} />
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText className="cart-text cart-text-item">Discount</IonText>
          </IonCol>
          <IonCol>
            <IonText className="cart-text cart-end-text">
              $
              {orderItems
                .reduce((acc, orderItem) => {
                  return acc + orderItem.qty * orderItem.item.discount;
                }, 0)
                .toFixed(2)}
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText className="cart-text cart-text-item">Sub total</IonText>
          </IonCol>
          <IonCol>
            <IonText className="cart-text cart-end-text">${subTotal}</IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <Button
              type="primary"
              width="100%"
              boxShadow="0 8px 24px rgba(234, 124, 105, 0.3)"
              opacity={+subTotal > 0 ? "1" : "0"}
              visibility={+subTotal > 0 ? "visible" : "hidden"}
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
