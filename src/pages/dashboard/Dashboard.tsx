import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab } from "../../redux/hooks";
import "./Dashboard.scss";

const Dashboard = () => {
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("dashboard");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="dashboard-container">
          <LeftMenu />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
