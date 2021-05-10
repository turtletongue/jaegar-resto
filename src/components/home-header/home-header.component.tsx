import { IonCol, IonGrid, IonRow, IonText, isPlatform } from "@ionic/react";
import { useSearchbar, useSelectedCategory } from "../../redux/hooks";
import CartButton from "../cart-button/cart-button.component";
import HomeHeaderMenuItem from "../home-header-menu-item/home-header-menu-item.component";
import Searchbar from "../searchbar/searchbar.component";
import "./home-header.styles.scss";

const HomeHeader = () => {
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();
  const { value, setValue } = useSearchbar();
  return (
    <IonGrid>
      <IonRow className="home-header-row">
        {!isPlatform("mobile") && (
          <IonCol>
            <IonText className="home-header-title">Jaegar Resto</IonText>
          </IonCol>
        )}
        <IonCol>
          <Searchbar
            placeholder="Search for food, coffe, etc.."
            value={value}
            onIonChange={(event) => setValue(event.detail.value)}
          />
        </IonCol>
        {isPlatform("mobile") && (
          <IonCol size="2">
            <CartButton />
          </IonCol>
        )}
      </IonRow>
      <IonRow className="home-header-row home-header-row-line">
        <HomeHeaderMenuItem
          text="Hot"
          selected={selectedCategory === "hot"}
          onClick={() => setSelectedCategory("hot")}
        />
        <HomeHeaderMenuItem
          text="Cold"
          selected={selectedCategory === "cold"}
          onClick={() => setSelectedCategory("cold")}
        />
        <HomeHeaderMenuItem
          text="Soup"
          selected={selectedCategory === "soup"}
          onClick={() => setSelectedCategory("soup")}
        />
        <HomeHeaderMenuItem
          text="Grill"
          selected={selectedCategory === "grill"}
          onClick={() => setSelectedCategory("grill")}
        />
        <HomeHeaderMenuItem
          text="Dessert"
          selected={selectedCategory === "dessert"}
          onClick={() => setSelectedCategory("dessert")}
        />
      </IonRow>
    </IonGrid>
  );
};

export default HomeHeader;
