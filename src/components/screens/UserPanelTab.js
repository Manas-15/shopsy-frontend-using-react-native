import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./shop/DashboardScreen";
import ChangePasswordScreen from "./auth/ChangePasswordScreen";
import Sidebar from "./Sidebar";

const Drawer = createDrawerNavigator();

const UserPanelTab = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          drawerStyle: { backgroundColor: "#f0eded" },
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen
          name="Change Password"
          component={ChangePasswordScreen}
        />
      </Drawer.Navigator>
    </>
  );
};

export default UserPanelTab;
