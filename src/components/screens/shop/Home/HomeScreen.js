import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserLoginScreen } from "../../auth/UserLoginScreen";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeSearch from "./HomeSearch";
import ProductList from "../Product/ProductList";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <>
      <HomeSearch />
      <ProductList />
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // margin: 20,
    padding: 20,
  },
  list: {
    // padding: 50,
    // justifyContent: "center",
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  item: {
    backgroundColor: "yellow",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    padding: 10,
    color: "#666",
  },
  price: {
    fontSize: 14,
    padding: 10,
    color: "#666",
  },
});
