import { IonSelect, IonSelectOption } from "@ionic/react";
import { useDineType } from "../../redux/hooks";
import "./dropdown.styles.scss";

const Dropdown = () => {
  const { dineType, setDineType } = useDineType();
  return (
    <IonSelect
      value={dineType}
      okText="Ok"
      cancelText="Cancel"
      onIonChange={(event) => setDineType(event.detail.value)}
      className="dropdown-bg"
    >
      <IonSelectOption value="Dine In">Dine In</IonSelectOption>
      <IonSelectOption value="Dine Out">Dine Out</IonSelectOption>
    </IonSelect>
  );
};

export default Dropdown;
