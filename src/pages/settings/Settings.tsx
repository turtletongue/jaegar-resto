import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab } from "../../redux/hooks";
import "./Settings.scss";

const Settings = () => {
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("settings");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="settings-container">
          <LeftMenu />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
