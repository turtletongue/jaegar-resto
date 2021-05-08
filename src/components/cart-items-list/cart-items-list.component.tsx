import OrderItem from "../../interfaces/OrderItem";
import CartItem from "../cart-item/cart-item.component";
import "./cart-items-list.styles.scss";

interface CartItemsListProps {
  orderItems: OrderItem[];
}

const CartItemsList = ({ orderItems }: CartItemsListProps) => {
  return (
    <div className="cart-items-list">
      {orderItems.map((orderItem) => {
        return <CartItem key={orderItem._id} />;
      })}
    </div>
  );
};

export default CartItemsList;
