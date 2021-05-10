import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Trash from "../../icons/trash.svg";
import OrderItem from "../../interfaces/OrderItem";
import Button from "../button/button.component";
import DishImage from "../dish-image/dish-image.component";
import Input from "../input/input.component";
import "./cart-item.styles.scss";

interface CartItemProps {
  orderItem: OrderItem;
  setQty: Function;
  deleteOrderItem: Function;
  addOrderItemNote: Function;
}

const CartItem = ({
  orderItem,
  setQty,
  deleteOrderItem,
  addOrderItemNote,
}: CartItemProps) => {
  return (
    <IonGrid className="cart-item-container">
      <IonRow className="cart-item-row">
        <IonCol size="8">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <DishImage
                  src={orderItem.item.imageUrl}
                  alt={orderItem.item.title}
                  width="3.5rem"
                />
              </IonCol>
              <IonCol size="9">
                <IonText className="cart-item-text cart-item-title">
                  {orderItem.item.title.slice(0, 18) + "..."}
                </IonText>
                <IonText className="cart-item-text cart-item-price">
                  ${orderItem.item.price}
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
        <IonCol size="2">
          <Input
            type="number"
            inputmode="numeric"
            min="1"
            value={orderItem.qty}
            width="3rem"
            onChange={(event) => setQty(orderItem._id, +event.detail.value)}
            className="cart-item-number-input"
          />
        </IonCol>
        <IonCol size="2">
          <IonText className="cart-item-text cart-item-total">
            ${(orderItem.item.price * orderItem.qty).toFixed(2)}
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="10">
          <Input
            placeholder="Order Note"
            value={orderItem.note}
            onChange={(event) =>
              addOrderItemNote(orderItem._id, event.detail.value)
            }
          />
        </IonCol>
        <IonCol size="2">
          <Button
            type="outline"
            icon={Trash}
            onClick={() => deleteOrderItem(orderItem._id)}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CartItem;
