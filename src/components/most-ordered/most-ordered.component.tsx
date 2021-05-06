import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import DishImage from "../dish-image/dish-image.component";
import "./most-ordered.styles.scss";

const MostOrdered = () => {
  return (
    <IonGrid className="most-ordered-container">
      <IonRow>
        <IonCol size="3">
          <DishImage
            src="https://i.ibb.co/C1fjm30/65002905c5ac0e408510b6fe534bf49e.png"
            alt="dish"
            width="5rem"
          />
        </IonCol>
        <IonCol size="9">
          <IonText className="most-ordered-text most-ordered-title">
            Spicy seasoned seafood noodles
          </IonText>
          <IonText className="most-ordered-text most-ordered-count">
            200 dishes ordered
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default MostOrdered;
