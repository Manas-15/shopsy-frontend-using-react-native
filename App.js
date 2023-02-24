import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View } from "react-native";
import { UserLoginScreen } from "./src/components/screens/auth/UserLoginScreen";
// import HomeScreen from "./components/screens/shop/HomeScreen";
// import { ShopTab } from "./components/screens/ShopTab";
import { UserSignupScreen } from "./src/components/screens/auth/UserSignupScreen";
// import ResetPasswordScreen from "./components/screens/auth/ResetPasswordScreen";
// import UserPanelTab from "./components/screens/UserPanelTab";
import { NativeBaseProvider, StatusBar, Text, Box } from "native-base";
import NotVerifyScreen from "./src/components/screens/shop/NotVerifyScreen";
import HomeScreen from "./src/components/screens/shop/Home/HomeScreen";
import ProductDetailScreen from "./src/components/screens/shop/Product/ProductDetailsScreen";
import ProductReview from "./src/components/screens/shop/Product/ProductReview";
import CartEmpty from "./src/components/screens/shop/Cart/CartEmpty";
import CartScreen from "./src/components/screens/shop/Cart/CartScreen";
import ProfileScreen from "./src/components/screens/profile/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigations/BottomNav";
import OrderScreen from "./src/components/screens/shop/Shipping/OrderInfoScreen";
import ShippingScreen from "./src/components/screens/shop/Shipping/ShippingScreen";
import PaymentScreen from "./src/components/screens/shop/Shipping/PaymentScreen";
import PlaceOrderScreen from "./src/components/screens/shop/Shipping/PlaceOrderScreen";
import { Provider } from "react-redux";
import { store } from "./src/helpers/Store";
import setupInterceptors from "./src/redux/services/setupInterceptors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/* <PaymentScreen /> */}
        {/* <PlaceOrderScreen /> */}
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="LogIn"
              component={UserLoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={UserSignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bottom"
              component={BottomNav}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <NotVerifyScreen /> */}
      </NativeBaseProvider>
    </Provider>
  );
}
setupInterceptors(store);
