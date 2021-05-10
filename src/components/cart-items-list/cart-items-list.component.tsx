import OrderItem from "../../interfaces/OrderItem";
import CartItem from "../cart-item/cart-item.component";
import "./cart-items-list.styles.scss";

interface CartItemsListProps {
  orderItems: OrderItem[];
  setQty: Function;
  deleteOrderItem: Function;
  addOrderItemNote: Function;
}

const CartItemsList = ({ orderItems, ...otherProps }: CartItemsListProps) => {
  return (
    <div className="cart-items-list">
      {orderItems.map((orderItem) => {
        return (
          <CartItem key={orderItem._id} orderItem={orderItem} {...otherProps} />
        );
      })}
    </div>
  );
};

export default CartItemsList;
