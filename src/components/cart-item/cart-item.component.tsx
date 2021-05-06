import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Trash from "../../icons/trash.svg";
import Button from "../button/button.component";
import DishImage from "../dish-image/dish-image.component";
import Input from "../input/input.component";
import "./cart-item.styles.scss";

const CartItem = () => {
  return (
    <IonGrid className="cart-item-container">
      <IonRow className="cart-item-row">
        <IonCol size="8">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <DishImage
                  src="https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png"
                  alt="dish"
                  width="3.5rem"
                />
              </IonCol>
              <IonCol size="9">
                <IonText className="cart-item-text cart-item-title">
                  Spicy seasoned sea...
                </IonText>
                <IonText className="cart-item-text cart-item-price">
                  $ 2.29
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
            value={1}
            width="3rem"
            className="cart-item-number-input"
          />
        </IonCol>
        <IonCol size="2">
          <IonText className="cart-item-text cart-item-total">$ 4,58</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="10">
          <Input placeholder="Order Note" />
        </IonCol>
        <IonCol size="2">
          <Button type="outline" icon={Trash} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CartItem;
