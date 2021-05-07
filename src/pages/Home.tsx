import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  isPlatform,
} from "@ionic/react";
import DishesList from "../components/dishes-list/dishes-list.component";
import HomeHeader from "../components/home-header/home-header.component";
import LeftMenu from "../components/left-menu/left-menu.component";
import { dishes } from "../test-data/data";
import "./Home.scss";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-container">
          <LeftMenu />
          <IonGrid className="home-grid">
            <IonRow>
              <IonCol size={isPlatform("mobile") ? "12" : "8"}>
                <HomeHeader />
                <DishesList dishes={dishes} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
