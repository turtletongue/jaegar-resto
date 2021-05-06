import { IonImg } from "@ionic/react";
import "./dish-image.styles.scss";

interface DishImageProps {
  src: string;
  alt: string;
  bottom?: string;
  top?: string;
  width?: string;
  height?: string;
}

const DishImage = (props: DishImageProps) => {
  return (
    <div className="dish-img-container">
      <IonImg
        {...props}
        className="dish-img"
        style={{
          bottom: props.bottom,
          top: props.top,
          width: props.width,
          height: props.height,
        }}
      />
    </div>
  );
};

export default DishImage;
