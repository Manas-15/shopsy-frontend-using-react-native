import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./shop/HomeScreen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const ShopTab = () => {
  const navigation = useNavigation();

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          drawerStyle: { backgroundColor: "#f0eded" },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Shopsy",
            drawerActiveTintColor: "black",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("UserLogIn")}
              >
                <Text style={{ color: "#fff", fontSize: 18, paddingRight: 20 }}>
                  Login
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};
