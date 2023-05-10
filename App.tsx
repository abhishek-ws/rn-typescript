import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { store } from "./app/store";
import AppNavigator from "./app/navigators/app";

import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "dark",
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          {/* WS primary theme color */}
          <StatusBar backgroundColor="#5343E8" />
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
