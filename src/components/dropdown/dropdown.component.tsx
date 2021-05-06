import { IonSelect, IonSelectOption } from "@ionic/react";
import "./dropdown.styles.scss";

const Dropdown = () => {
  return (
    <IonSelect
      value="Dine In"
      okText="Ok"
      cancelText="Cancel"
      className="dropdown-bg"
    >
      <IonSelectOption value="Dine In">Dine In</IonSelectOption>
      <IonSelectOption value="Dine Out">Dine Out</IonSelectOption>
    </IonSelect>
  );
};

export default Dropdown;
