import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab } from "../../redux/hooks";
import "./Messages.scss";

const Messages = () => {
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("message");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="messages-container">
          <LeftMenu />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
