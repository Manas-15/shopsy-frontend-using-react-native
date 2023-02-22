import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { Text, View } from "react-native";

const Sidebar = ({ ...props }) => {
  const navigation = useNavigation();

  const Logout = () => {
    navigation.navigate("UserLogIn");
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 5,
            marginTop: 15,
          }}
        >
          Aditya kar
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
          adityakar@gmail.com
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Log out" onPress={Logout} />
    </DrawerContentScrollView>
  );
};

export default Sidebar;
