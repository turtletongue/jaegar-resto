import { IonImg, IonText } from "@ionic/react";
import "./button.styles.scss";

interface ButtonProps {
  children?: string;
  icon?: string;
  type?: "primary" | "outline";
  border?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  icon,
  type,
  border,
  width,
  height,
  boxShadow,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        (type === "outline" ? "button-outline" : "button-primary") + " button"
      }
      style={{ border, width, height, boxShadow }}
    >
      {icon && <IonImg src={icon} alt="icon" className="button-icon" />}
      {children && (
        <IonText
          className="button-text"
          style={{ paddingLeft: icon ? "0.5rem" : undefined }}
        >
          {children}
        </IonText>
      )}
    </button>
  );
};

export default Button;
