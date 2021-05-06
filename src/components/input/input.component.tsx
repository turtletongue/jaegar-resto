import { IonInput } from "@ionic/react";
import "./input.styles.scss";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: "number" | "text";
  inputmode?: "numeric" | "text";
  min?: string;
  max?: string;
  value?: string | number;
  width?: string;
  height?: string;
}

const Input = ({ width, height, ...otherProps }: InputProps) => {
  return (
    <IonInput {...otherProps} className="input" style={{ width, height }} />
  );
};

export default Input;
