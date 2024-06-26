import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "./components/home";
import Settings from "./components/settings";
import Statistics from "./components/statistics";
import MyCards from "./components/mycards";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 100 },
        tabBarLabelStyle: {
          fontSize: 12,
          opacity: 0.6,
          marginBottom: 13,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("./assets/icons8-home-32.png")}
              style={{
                width: size,
                height: size,
                marginTop: 10,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCards}
        options={{
          tabBarLabel: "My Cards",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("./assets/myCards.png")}
              style={{
                width: size,
                height: size,
                marginTop: 10,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: "Statistics",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("./assets/statictics.png")}
              style={{
                width: size,
                height: size,
                marginTop: 10,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("./assets/settings.png")}
              style={{
                width: size,
                height: size,
                marginTop: 10,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
