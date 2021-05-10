import { IonBadge, IonImg, useIonModal } from "@ionic/react";
import ShoppingCart from "../../icons/shopping-cart.svg";
import { useDineType, useOrderItems } from "../../redux/hooks";
import Cart from "../cart/cart.component";
import "./cart-button.styles.scss";

const CartButton = () => {
  const {
    orderItems,
    setQty,
    deleteOrderItem,
    addOrderItemNote,
  } = useOrderItems();
  // TODO: async thunk to get and calc order id
  const orderId = 34562;
  const { dineType, setDineType } = useDineType();
  const dishesInCartCount = orderItems.reduce(
    (acc, orderItem) => acc + orderItem.qty,
    0
  );
  const onDismiss = () => {
    dismiss();
  };
  const [present, dismiss] = useIonModal(Cart, {
    orderId,
    orderItems,
    dineType,
    setDineType,
    onDismiss,
    setQty,
    deleteOrderItem,
    addOrderItemNote,
  });
  return (
    <button
      className="cart-icon-bg"
      onClick={() => {
        present();
      }}
    >
      <IonImg src={ShoppingCart} alt="cart" className="cart-icon" />
      {dishesInCartCount > 0 && (
        <IonBadge color="warning" className="cart-badge">
          {dishesInCartCount}
        </IonBadge>
      )}
    </button>
  );
};

export default CartButton;
