import { IonImg, IonText } from "@ionic/react";
import EditIcon from "../../icons/edit.svg";
import "./dish-edit-button.styles.scss";

const DishEditButton = () => {
  return (
    <button className="dish-edit-button">
      <IonImg src={EditIcon} alt="edit" className="dish-edit-icon" />
      <IonText className="dish-edit-button-text">Edit Dish</IonText>
    </button>
  );
};

export default DishEditButton;
