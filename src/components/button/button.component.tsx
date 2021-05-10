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
  opacity?: string;
  visibility?: VisibilityState;
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
  opacity,
  visibility,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        (type === "outline" ? "button-outline" : "button-primary") + " button"
      }
      style={{ border, width, height, boxShadow, visibility, opacity }}
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
