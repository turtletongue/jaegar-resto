import { useState } from "react";
import Dashboard from "../../icons/dashboard.svg";
import Discount from "../../icons/discount.svg";
import FillDashboard from "../../icons/fill-dashboard.svg";
import FillDiscount from "../../icons/fill-discount.svg";
import FillHome from "../../icons/fill-home.svg";
import FillMessage from "../../icons/fill-message.svg";
import FillNotification from "../../icons/fill-notification.svg";
import FillSettings from "../../icons/fill-settings.svg";
import Home from "../../icons/home.svg";
import Logout from "../../icons/log-out.svg";
import Message from "../../icons/message.svg";
import Notification from "../../icons/notification.svg";
import Settings from "../../icons/settings.svg";
import Logo from "../logo/logo.component";
import MenuItem from "../menu-item/menu-item.component";
import "./left-menu.styles.scss";

const LeftMenu = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  return (
    <div className="left-menu-bg">
      <Logo />
      <MenuItem
        selectedIcon={Home}
        normalIcon={FillHome}
        selected={selectedItem === "home"}
        onClick={() => setSelectedItem("home")}
      />
      <MenuItem
        selectedIcon={Discount}
        normalIcon={FillDiscount}
        selected={selectedItem === "discount"}
        onClick={() => setSelectedItem("discount")}
      />
      <MenuItem
        selectedIcon={Dashboard}
        normalIcon={FillDashboard}
        selected={selectedItem === "dashboard"}
        onClick={() => setSelectedItem("dashboard")}
      />
      <MenuItem
        selectedIcon={Message}
        normalIcon={FillMessage}
        selected={selectedItem === "message"}
        onClick={() => setSelectedItem("message")}
      />
      <MenuItem
        selectedIcon={Notification}
        normalIcon={FillNotification}
        selected={selectedItem === "notification"}
        onClick={() => setSelectedItem("notification")}
      />
      <MenuItem
        selectedIcon={Settings}
        normalIcon={FillSettings}
        selected={selectedItem === "settings"}
        onClick={() => setSelectedItem("settings")}
      />
      <MenuItem normalIcon={Logout} />
    </div>
  );
};

export default LeftMenu;
