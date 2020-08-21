import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        tabStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        labelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
