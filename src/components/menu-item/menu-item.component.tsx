import { IonImg } from "@ionic/react";
import ActiveMenuItem from "../../icons/active-menu-item.svg";
import "./menu-item.styles.scss";

interface MenuItemProps {
  selected?: boolean;
  normalIcon?: string;
  selectedIcon?: string;
  onClick?: () => void;
}

const MenuItem = ({
  selected,
  normalIcon,
  selectedIcon,
  onClick,
}: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundImage: selected ? `url(${ActiveMenuItem})` : undefined,
      }}
      className="menu-item-container"
    >
      <div
        className="menu-item-bg"
        style={{
          background: selected ? "#EA7C69" : undefined,
          boxShadow: selected
            ? "0 8px 24px rgba(234, 124, 105, 0.32)"
            : undefined,
        }}
      >
        <IonImg
          src={selected ? selectedIcon : normalIcon}
          alt="home"
          className="menu-item-icon"
        />
      </div>
    </button>
  );
};

export default MenuItem;
