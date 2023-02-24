import { TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles, toastConfig } from "../../../../style";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
  Pressable,
  View,
} from "native-base";
import Colors from "../../../helpers/Colors";
import LoginSVG from "../../../../assets/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/actions/user.actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserLoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const clearTextInput = () => {
    setEmail(""), setPassword("");
    console.log("calling submit");
  };
  const handleFormSubmit = async () => {
    // navigation.navigate("Bottom");

    if (email && password) {
      console.log("11111");
      const strategy = "local";
      const formData = { email, password, strategy };
      await AsyncStorage.setItem("user", JSON.stringify(formData));
      setFlag(true);
      dispatch(userActions.login(formData));
      clearTextInput();
    } else {
      console.log("22222");
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All Fields are required",
      });
      clearTextInput();
    }
  };

  const userDetails = useSelector((state) => state?.user);

  useEffect(() => {
    // const findUser = async () => {
    //   const result = await AsyncStorage.getItem("user");
    // };
    if (userDetails?.user?.data?.accessToken) {
      navigation.navigate("Bottom");
    } else {
      navigation.navigate("LogIn");
    }
    // findUser();
  }, [userDetails]);
  return (
    <>
      <Box flex={1} bg={Colors.white}>
        <Toast config={toastConfig} />

        <Box alignItems="center" mt={5} mb={5} pb={10}>
          <LoginSVG width="100%" height="55%" style={{ color: Colors.main }} />
        </Box>

        <Box
          w="full"
          h="full"
          position="absolute"
          top="0"
          px="6"
          justifyContent="center"
          mt={12}
          alignItems="center"
        >
          <Heading>Login</Heading>
          <VStack space={8} pt="6">
            <Input
              InputLeftElement={
                <MaterialIcons name="email" size={20} color={Colors.main} />
              }
              value={email}
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
              value={password}
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
            LOGIN
          </Button>
          <Box style={{ flexDirection: "row" }} justifyContent="space-between">
            <Box style={{ flex: 1 }}>
              <Pressable
                onPress={() => navigation.navigate("ForgotPassword")}
                // style={{ justifyContent: "flex-start" }}
              >
                <Text style={{ fontWeight: "bold" }}>Forgot Password ?</Text>
              </Pressable>
            </Box>
            <Box style={{ flex: 1 }}>
              <Pressable
                onPress={() => navigation.navigate("SignUp")}
                // style={{ justifyContent: "flex-end" }}
              >
                <Text style={{ fontWeight: "bold" }}>New user? Sign up</Text>
              </Pressable>
            </Box>
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
            <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
              <Button
                title="Log In"
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
