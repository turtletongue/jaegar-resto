import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  isPlatform,
} from "@ionic/react";
import HomeHeader from "../components/home-header/home-header.component";
import LeftMenu from "../components/left-menu/left-menu.component";
import "./Home.scss";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="page-container">
          <LeftMenu />
          <IonGrid>
            <IonRow>
              <IonCol size={isPlatform("mobile") ? "12" : "8"}>
                <HomeHeader />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
