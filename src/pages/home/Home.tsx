import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  isPlatform,
} from "@ionic/react";
import { useEffect } from "react";
import Cart from "../../components/cart/cart.component";
import DishesList from "../../components/dishes-list/dishes-list.component";
import HomeHeader from "../../components/home-header/home-header.component";
import LeftMenu from "../../components/left-menu/left-menu.component";
import { useActiveTab, useDineType, useOrderItems } from "../../redux/hooks";
import { dishes } from "../../test-data/data";
import "./Home.scss";

const Home = () => {
  // TODO: async thunk to get and calc order id
  const orderId = 34562;
  const { dineType, setDineType } = useDineType();
  const {
    orderItems,
    deleteOrderItem,
    addOrderItemNote,
    setQty,
  } = useOrderItems();
  const { setActiveTab } = useActiveTab();
  useEffect(() => {
    setActiveTab("home");
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-container">
          <LeftMenu />
          <IonGrid className="home-grid">
            <IonRow className="home-row">
              <IonCol size={isPlatform("mobile") ? "12" : "8"}>
                <HomeHeader />
                <DishesList dishes={dishes} />
              </IonCol>
              {!isPlatform("mobile") && (
                <IonCol className="home-col" size="4">
                  <Cart
                    orderId={orderId}
                    dineType={dineType}
                    setDineType={setDineType}
                    orderItems={orderItems}
                    deleteOrderItem={deleteOrderItem}
                    setQty={setQty}
                    addOrderItemNote={addOrderItemNote}
                  />
                </IonCol>
              )}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
