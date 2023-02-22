import { Box, Text, View } from "native-base";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/shop/Home/HomeScreen";
import ProductDetailScreen from "../components/screens/shop/Product/ProductDetailsScreen";
import ShippingScreen from "../components/screens/shop/Shipping/ShippingScreen";
import PaymentScreen from "../components/screens/shop/Shipping/PaymentScreen";
import PlaceOrderScreen from "../components/screens/shop/Shipping/PlaceOrderScreen";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shipping"
          component={ShippingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNav;
