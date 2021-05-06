import { IonCol, IonGrid, IonRow, IonText, isPlatform } from "@ionic/react";
import { useState } from "react";
import HomeHeaderMenuItem from "../home-header-menu-item/home-header-menu-item.component";
import Searchbar from "../searchbar/searchbar.component";
import "./home-header.styles.scss";

const HomeHeader = () => {
  const [selectedItem, setSelectedItem] = useState("hot");
  return (
    <IonGrid>
      <IonRow className="home-header-row">
        {!isPlatform("mobile") && (
          <IonCol>
            <IonText className="home-header-title">Jaegar Resto</IonText>
          </IonCol>
        )}
        <IonCol>
          <Searchbar placeholder="Search for food, coffe, etc.." />
        </IonCol>
      </IonRow>
      <IonRow className="home-header-row home-header-row-line">
        <HomeHeaderMenuItem
          text="Hot"
          selected={selectedItem === "hot"}
          onClick={() => setSelectedItem("hot")}
        />
        <HomeHeaderMenuItem
          text="Cold"
          selected={selectedItem === "cold"}
          onClick={() => setSelectedItem("cold")}
        />
        <HomeHeaderMenuItem
          text="Soup"
          selected={selectedItem === "soup"}
          onClick={() => setSelectedItem("soup")}
        />
        <HomeHeaderMenuItem
          text="Grill"
          selected={selectedItem === "grill"}
          onClick={() => setSelectedItem("grill")}
        />
        <HomeHeaderMenuItem
          text="Dessert"
          selected={selectedItem === "dessert"}
          onClick={() => setSelectedItem("dessert")}
        />
      </IonRow>
    </IonGrid>
  );
};

export default HomeHeader;
