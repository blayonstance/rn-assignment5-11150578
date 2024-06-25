import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "./components/settings";
import Home from "./components/home";

const Stack = createNativeStackNavigator();
const Stacknavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
};

export default Stacknavigator;
