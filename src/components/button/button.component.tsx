import { IonImg, IonText } from "@ionic/react";
import "./button.styles.scss";

interface ButtonProps {
  children?: string;
  icon?: string;
  type?: "primary" | "outline";
  border?: string;
}

const Button = ({ children, icon, type, border }: ButtonProps) => {
  return (
    <button
      className={
        (type === "outline" ? "button-outline" : "button-primary") + " button"
      }
      style={{ border }}
    >
      <IonImg src={icon} alt="icon" className="button-icon" />
      {children && <IonText className="button-text">{children}</IonText>}
    </button>
  );
};

export default Button;
