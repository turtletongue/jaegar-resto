import { IonSearchbar } from "@ionic/react";
import "./searchbar.styles.scss";

interface SearchbarProps {
  placeholder?: string;
}

const Searchbar = (props: SearchbarProps) => {
  return <IonSearchbar {...props} className="searchbar" />;
};

export default Searchbar;
