import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Dish from "../../interfaces/Dish";
import { useSearchbar, useSelectedCategory } from "../../redux/hooks";
import DishCard from "../dish-card/dish-card.component";
import Dropdown from "../dropdown/dropdown.component";
import "./dishes-list.styles.scss";

interface DishesListProps {
  dishes: Dish[];
}

const DishesList = ({ dishes }: DishesListProps) => {
  const { selectedCategory } = useSelectedCategory();
  const { value } = useSearchbar();
  return (
    <div className="dishes-list-container">
      <div className="dishes-list-header">
        <IonText className="dishes-list-text dishes-list-header-text">
          Choose Dishes
        </IonText>
        <Dropdown />
      </div>
      <IonGrid className="dishes-list-grid">
        <IonRow className="dishes-list-row">
          {dishes
            .filter(
              (dish: Dish) =>
                dish.category === selectedCategory &&
                dish.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((dish: Dish) => {
              return (
                <IonCol key={dish._id}>
                  <DishCard dish={dish} />
                </IonCol>
              );
            })}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default DishesList;
