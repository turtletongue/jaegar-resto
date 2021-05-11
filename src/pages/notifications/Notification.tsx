import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab } from "../../redux/hooks";
import "./Notifications.scss";

const Notifications = () => {
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("notification");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="notifications-container">
          <LeftMenu />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
