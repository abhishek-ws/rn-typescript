import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Emojis from "../scenes/Emojis/index";
import Weather from "../scenes/Weather";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const today = new Date().toDateString();

  return (
    <Stack.Navigator>
      <Stack.Screen name={`Pune, ${today}`} component={Weather} />
      <Stack.Screen name="Emojis on Github" component={Emojis} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
