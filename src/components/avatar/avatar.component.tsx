import { IonImg } from "@ionic/react";
import "./avatar.styles.scss";

interface AvatarProps {
  color?: string;
  src?: string;
}

const Avatar = ({ color, src }: AvatarProps) => {
  return (
    <IonImg
      src={src}
      alt="avatar"
      style={{ background: color }}
      className="avatar"
    />
  );
};

export default Avatar;
