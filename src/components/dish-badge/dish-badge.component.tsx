import { IonBadge } from "@ionic/react";
import "./dish-badge.styles.scss";

interface DishBadgeProps {
  color?: string;
  children: string;
}

const DishBadge = ({ color, children }: DishBadgeProps) => {
  let textColor;
  let backgroundColor;
  switch (color) {
    case "success":
      textColor = "#50D1AA";
      backgroundColor = "rgba(80, 209, 170, 0.34)";
      break;
    case "tertiary":
      textColor = "#9290FE";
      backgroundColor = "rgba(146, 144, 254, 0.34)";
      break;
    case "warning":
      textColor = "#FFB572";
      backgroundColor = "rgba(255, 181, 114, 0.34)";
      break;
    default:
      break;
  }
  return (
    <IonBadge
      className="dish-badge-bg"
      color={color}
      style={{
        color: textColor,
        backgroundColor,
      }}
    >
      {children}
    </IonBadge>
  );
};

export default DishBadge;
