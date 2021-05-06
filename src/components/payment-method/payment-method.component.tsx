import { IonCard, IonCardContent, IonImg, IonText } from "@ionic/react";
import CheckmarkCircle from "../../icons/checkmark-circle.svg";
import "./payment-method.styles.scss";

interface PaymentMethodProps {
  icon?: string;
  text: string;
  selected?: boolean;
}

const PaymentMethod = ({ icon, text, selected }: PaymentMethodProps) => {
  return (
    <IonCard
      className="payment-method-bg"
      style={{ filter: !selected && "brightness(0.7)" }}
    >
      <IonCardContent className="payment-method-container">
        <IonImg src={icon} alt="icon" className="payment-method-icon" />
        <IonText className="payment-method-text">{text}</IonText>
        {selected && (
          <IonImg
            className="payment-method-icon-checkmark"
            src={CheckmarkCircle}
            alt="checkmark circle"
          />
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default PaymentMethod;
