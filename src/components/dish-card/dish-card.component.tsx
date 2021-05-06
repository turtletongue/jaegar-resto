import { IonCard, IonCardContent, IonText } from "@ionic/react";
import DishImage from "../dish-image/dish-image.component";
import DishTitle from "../dish-title/dish-title.component";
import "./dish-card.styles.scss";

const DishCard = () => {
  return (
    <IonCard className="dish-card-bg">
      <DishImage
        src="https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png"
        alt="dish"
        bottom="55%"
      />
      <IonCardContent className="dish-card-content">
        <DishTitle>Spicy seasoned seafood noodles</DishTitle>
        <IonText className="dish-card-text dish-card-price">$2.29</IonText>
        <IonText className="dish-card-text dish-card-count">
          20 Bowls available
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default DishCard;
