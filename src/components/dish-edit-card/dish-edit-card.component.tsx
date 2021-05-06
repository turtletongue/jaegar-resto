import { IonCard, IonCardContent, IonText } from "@ionic/react";
import DishEditButton from "../dish-edit-button/dish-edit-button.component";
import DishImage from "../dish-image/dish-image.component";
import DishTitle from "../dish-title/dish-title.component";
import Dot from "../dot/dot.component";
import "./dish-edit-card.styles.scss";

const DishEditCard = () => {
  return (
    <IonCard className="dish-edit-card-bg">
      <DishImage
        src="https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png"
        alt="dish"
        top="8%"
      />
      <IonCardContent className="dish-edit-card-content">
        <DishTitle>Spicy seasoned seafood noodles</DishTitle>
        <div className="dish-edit-card-data-container">
          <IonText className="dish-edit-card-text">$2.29</IonText>
          <Dot />
          <IonText className="dish-edit-card-text">20 Bowls</IonText>
        </div>
      </IonCardContent>
      <DishEditButton />
    </IonCard>
  );
};

export default DishEditCard;
