import { Link } from "react-router-dom";
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
import { useActiveTab } from "../../redux/hooks";
import Logo from "../logo/logo.component";
import MenuItem from "../menu-item/menu-item.component";
import "./left-menu.styles.scss";

const LeftMenu = () => {
  const { activeTab, setActiveTab } = useActiveTab();
  return (
    <div className="left-menu-bg">
      <Logo />
      <Link to="/home">
        <MenuItem
          selectedIcon={Home}
          normalIcon={FillHome}
          selected={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
      </Link>
      <Link to="/discount">
        <MenuItem
          selectedIcon={Discount}
          normalIcon={FillDiscount}
          selected={activeTab === "discount"}
          onClick={() => setActiveTab("discount")}
        />
      </Link>
      <Link to="/dashboard">
        <MenuItem
          selectedIcon={Dashboard}
          normalIcon={FillDashboard}
          selected={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        />
      </Link>
      <Link to="/messages">
        <MenuItem
          selectedIcon={Message}
          normalIcon={FillMessage}
          selected={activeTab === "message"}
          onClick={() => setActiveTab("message")}
        />
      </Link>
      <Link to="/notifications">
        <MenuItem
          selectedIcon={Notification}
          normalIcon={FillNotification}
          selected={activeTab === "notification"}
          onClick={() => setActiveTab("notification")}
        />
      </Link>
      <Link to="/settings">
        <MenuItem
          selectedIcon={Settings}
          normalIcon={FillSettings}
          selected={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </Link>
      <MenuItem normalIcon={Logout} />
    </div>
  );
};

export default LeftMenu;
