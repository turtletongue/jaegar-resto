import { IonSearchbar } from "@ionic/react";
import "./searchbar.styles.scss";

interface SearchbarProps {
  placeholder?: string;
  value: string;
  onIonChange: (event: CustomEvent) => void;
}

const Searchbar = (props: SearchbarProps) => {
  return <IonSearchbar {...props} className="searchbar" />;
};

export default Searchbar;
