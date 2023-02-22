import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles, toastConfig } from "../../../../style";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../../../helpers/Colors";

import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  VStack,
  Text,
  Pressable,
} from "native-base";
import Checkbox from "expo-checkbox";
import SignupSVG from "../../../../assets/signup.svg";
import { useNavigation } from "@react-navigation/native";

export const UserSignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const clearTextInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCnfPassword("");
    setCheckbox(false);
  };
  const handleFormSubmit = () => {
    if (name && email && password) {
      const formData = { name, email, password };
      console.log(formData);
      Toast.show({
        type: "success",
        position: "top",
        topOffset: 0,
        text1: "Signup Successfully",
      });
      clearTextInput();
      setTimeout(() => {
        navigation.navigate("LogIn");
      }, 3000);
    } else {
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All Fields are required",
      });
    }
  };
  return (
    <>
      <Box flex={1} bg={Colors.white}>
        <Toast config={toastConfig} />

        <Box alignItems="center" mt={5} mb={5} pb={10}>
          <SignupSVG width="100%" height="55%" style={{ color: Colors.main }} />
        </Box>
        <Box
          w="full"
          h="full"
          position="absolute"
          top="0"
          px="6"
          mt={12}
          justifyContent="center"
          alignItems="center"
        >
          <Heading>SIGN UP</Heading>
          <VStack space={8} pt="6">
            <Input
              InputLeftElement={
                <FontAwesome name="user" size={20} color={Colors.main} />
              }
              onChangeText={setName}
              variant="underlined"
              placeholder="John Deo"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
            <Input
              InputLeftElement={
                <MaterialIcons name="email" size={20} color={Colors.main} />
              }
              onChangeText={setEmail}
              variant="underlined"
              placeholder="user@gmail.com"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
            <Input
              InputLeftElement={
                <Ionicons name="eye" size={20} color={Colors.main} />
              }
              onChangeText={setPassword}
              variant="underlined"
              placeholder="**********"
              type="password"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
          </VStack>
          <Button
            _pressed={{ bg: Colors.main }}
            my={30}
            w="40%"
            rounded={50}
            bg={Colors.main}
            onPress={handleFormSubmit}
          >
            SIGNUP
          </Button>

          <Box style={{ alignItems: "center" }}>
            <Pressable
              onPress={() => navigation.navigate("LogIn")}
              style={{ justifyContent: "flex-end" }}
            >
              <Text style={{ fontWeight: "bold" }}>Already a user? Log In</Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
      {/* <SafeAreaView>
        <Toast config={toastConfig} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginHorizontal: 30 }}>
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <MaterialIcon name="shopping-bag" color="purple" size={100} />
            </View>
            <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
              <Text style={styles.labelText}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                placeholder="Enter your name"
                onChangeText={setName}
                onPress={console.log(name)}
                // keyboardType="email-address"
              />
            </View>
            <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
              <Text style={styles.labelText}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter your email"
                onChangeText={setEmail}
                onPress={console.log(email)}
                keyboardType="email-address"
              />
            </View>
            <View style={[styles.inputWithLabel]}>
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                placeholder="Enter your password"
                onChangeText={setPassword}
                onPress={console.log(password)}
                secureTextEntry={true}
              />
            </View>
            <View style={[styles.inputWithLabel]}>
              <Text style={styles.labelText}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                value={cnfPassword}
                placeholder="Enter your Confirm password"
                onChangeText={setCnfPassword}
                onPress={console.log(cnfPassword)}
                secureTextEntry={true}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Checkbox
                value={checkbox}
                onValueChange={setCheckbox}
                color={checkbox ? "purple" : undefined}
              />
              <Text style={styles.labelText}>
                I agree to Term and Conditions
              </Text>
            </View>
            <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
              <Button
                title="Sign Up"
                onPress={handleFormSubmit}
                color="purple"
              />
            </View>

            
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};
