import { IonCol, IonGrid, IonImg, IonRow, IonText } from "@ionic/react";
import "./settings-menu-item.styles.scss";

interface SettingsMenuItemProps {
  icon: string;
  activeIcon: string;
  title?: string;
  text?: string;
  isActive: boolean;
}

const SettingsMenuItem = ({
  isActive,
  title,
  text,
  icon,
  activeIcon,
}: SettingsMenuItemProps) => {
  return (
    <IonGrid
      className="settings-menu-item-container"
      style={{ background: isActive ? "rgba(234, 124, 105, 0.16)" : null }}
    >
      <IonRow className="settings-menu-item-row">
        <IonCol size="1">
          <IonImg
            src={isActive ? activeIcon : icon}
            alt="icon"
            className="settings-menu-item-icon"
          />
        </IonCol>
        <IonCol size="10">
          <IonText
            className="settings-menu-item-text settings-menu-item-title"
            style={{ color: isActive ? "#ea7c69" : "#3B5162" }}
          >
            {title}
          </IonText>
          <IonText className="settings-menu-item-text">{text}</IonText>
        </IonCol>
        {isActive && (
          <IonCol size="1" className="settings-menu-item-col">
            <div className="settings-menu-item-line" />
          </IonCol>
        )}
      </IonRow>
    </IonGrid>
  );
};

export default SettingsMenuItem;
