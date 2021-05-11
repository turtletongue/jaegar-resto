import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab } from "../../redux/hooks";
import "./Discount.scss";

const Discount = () => {
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("discount");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="discount-container">
          <LeftMenu />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Discount;
