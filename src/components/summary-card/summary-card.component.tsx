import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import ArrowUp from "../../icons/arrow-up.svg";
import Coin from "../../icons/coin.svg";
import "./summary-card.styles.scss";

const SummaryCard = () => {
  return (
    <IonCard className="summary-card-bg">
      <IonCardContent>
        <IonGrid>
          <IonRow className="summary-card-row">
            <IonCol size="3">
              <div className="coin-icon-bg">
                <IonImg src={Coin} alt="coin" className="coin-icon" />
              </div>
            </IonCol>
            <IonCol size="4">
              <IonText className="summary-card-text summary-card-growth-rate">
                +32.40%
              </IonText>
            </IonCol>
            <IonCol size="3">
              <div className="arrow-up-icon-bg">
                <IonImg
                  src={ArrowUp}
                  alt="arrow up"
                  className="arrow-up-icon"
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="summary-card-row">
            <IonText className="summary-card-text summary-card-total">
              $10,243.00
            </IonText>
          </IonRow>
          <IonRow className="summary-card-row">
            <IonText className="summary-card-text summary-card-total-revenue">
              Total Revenue
            </IonText>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default SummaryCard;
