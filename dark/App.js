import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import AppNavigator from "./stacknavigator";
import { ThemeProvider, ThemeContext } from "./components/themecontext";

const AppContent = () => {
  const { isDark } = React.useContext(ThemeContext);
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
