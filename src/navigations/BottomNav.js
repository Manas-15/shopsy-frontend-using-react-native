import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Center, Pressable, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import ProfileScreen from "../components/screens/profile/ProfileScreen";
import CartScreen from "../components/screens/shop/Cart/CartScreen";
import HomeScreen from "../components/screens/shop/Home/HomeScreen";
import Colors from "../helpers/Colors";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={Colors.main}
    top={-30}
    shadow={2}
    _pressed={{ bg: Colors.black }}
  >
    {children}
  </Pressable>
);
const BottomNav = () => {
  return (
    <>
      <Tab.Navigator
        backBehavior="Main"
        initialRouteName="Profile"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { ...styles.tab },
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        {/* Home screen  */}
        <Tab.Screen
          name="Main"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Center>
                {focused ? (
                  <Entypo name="home" size={24} color={Colors.main} />
                ) : (
                  <AntDesign name="home" size={24} color={Colors.black} />
                )}
              </Center>
            ),
          }}
        />
        {/* Cart Tab */}
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarButton: (props) => <CustomTab {...props} />,
            tabBarIcon: ({ focused }) => (
              <Center>
                {focused ? (
                  <FontAwesome5
                    name="shopping-basket"
                    size={24}
                    color={Colors.white}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    size={24}
                    color={Colors.white}
                  />
                )}
              </Center>
            ),
          }}
        />
        {/* Profile */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Center>
                {focused ? (
                  <FontAwesome name="user" size={24} color={Colors.main} />
                ) : (
                  <AntDesign name="user" size={24} color={Colors.black} />
                )}
              </Center>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default BottomNav;

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
    paddingTop: 5,
  },
});
