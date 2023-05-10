import { Alert } from "react-native";
import { Button as Btn } from "@rneui/themed";
import { GestureResponderEvent } from "react-native";

interface ButtonProps {
  type?: "solid" | "outline" | "clear";
  title: string;
  disabled?: boolean;
  onPress: Function;
  bgColor?: string;
  raised?: boolean;
  loading?: boolean;
}

// TODO: style the button with standard colors as per ws theme during theme configuration task
const Button = ({
  type,
  disabled,
  title,
  onPress,
  raised,
  loading,
}: ButtonProps) => {
  const handleGesture = (event: GestureResponderEvent) => onPress(event);

  return (
    <Btn
      title={title}
      loading={loading}
      type={type}
      raised={raised}
      disabled={disabled}
      onPress={handleGesture as (event: GestureResponderEvent) => void}
    />
  );
};

Button.defaultProps = {
  title: "Press me",
  type: "solid",
  disabled: false,
  raised: true,
  onPress: () => {
    console.log("clicked");
    Alert.alert("Button pressed");
  },
};

export default Button;
