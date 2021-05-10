import { IonCard, IonCardContent, IonText } from "@ionic/react";
import Dish from "../../interfaces/Dish";
import { useOrderItems } from "../../redux/hooks";
import DishImage from "../dish-image/dish-image.component";
import DishTitle from "../dish-title/dish-title.component";
import "./dish-card.styles.scss";

interface DishCardProps {
  dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
  const { appendOrderItem } = useOrderItems();
  return (
    <IonCard className="dish-card-bg" onClick={() => appendOrderItem(dish)}>
      <DishImage src={dish.imageUrl} alt={dish.title} bottom="55%" />
      <IonCardContent className="dish-card-content">
        <DishTitle>{dish.title}</DishTitle>
        <IonText className="dish-card-text dish-card-price">
          ${dish.price}
        </IonText>
        <IonText className="dish-card-text dish-card-count">
          {dish.count} Bowl{dish.count > 1 ? "s" : ""} available
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default DishCard;
