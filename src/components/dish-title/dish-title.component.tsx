import { IonText } from "@ionic/react";
import "./dish-title.styles.scss";

interface DishTitleProps {
  children?: string;
}

const DishTitle = ({ children }: DishTitleProps) => {
  return <IonText className="dish-title">{children}</IonText>;
};

export default DishTitle;
