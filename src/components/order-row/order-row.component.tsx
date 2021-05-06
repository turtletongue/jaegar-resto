import { IonCol, IonRow, IonText } from "@ionic/react";
import Avatar from "../avatar/avatar.component";
import DishBadge from "../dish-badge/dish-badge.component";
import "./order-row.styles.scss";

interface OrderRowProps {
  avatar: { src: string; color: string };
  name: string;
  title: string;
  total: number;
  status: "Completed" | "Preparing" | "Pending";
}

const OrderRow = ({ avatar, name, title, total, status }: OrderRowProps) => {
  const badgeType =
    status === "Completed"
      ? "success"
      : status === "Preparing"
      ? "tertiary"
      : "warning";
  return (
    <IonRow className="order-row">
      <IonCol size="1">
        <Avatar src={avatar.src} color={avatar.color} />
      </IonCol>
      <IonCol size="3">
        <IonText className="order-row-text">{name}</IonText>
      </IonCol>
      <IonCol size="3">
        <IonText className="order-row-text">{title}</IonText>
      </IonCol>
      <IonCol size="3">
        <IonText className="order-row-text">${total}</IonText>
      </IonCol>
      <IonCol size="2">
        <DishBadge color={badgeType}>{status}</DishBadge>
      </IonCol>
    </IonRow>
  );
};

export default OrderRow;
