import { IonCol, IonText } from "@ionic/react";
import "./home-header-menu-item.styles.scss";

interface HomeHeaderMenuItemProps {
  selected?: boolean;
  text?: string;
  onClick?: () => void;
}

const HomeHeaderMenuItem = ({
  selected,
  text,
  onClick,
}: HomeHeaderMenuItemProps) => {
  return (
    <IonCol onClick={onClick} className="home-header-menu-item-container">
      <button
        className="home-header-menu-item"
        style={{
          color: selected ? "#EA7C69" : undefined,
          borderBottom: selected ? "2px solid #EA7C69" : undefined,
        }}
      >
        <IonText>{text}</IonText>
      </button>
    </IonCol>
  );
};

export default HomeHeaderMenuItem;
