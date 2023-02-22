import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { styles, toastConfig } from "../../../style";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const clearTextInput = () => {
    setPassword("");
    setCnfPassword("");
  };

  const changePassword = () => {
    console.log("change");
    if (password === cnfPassword) {
      const formData = { password, cnfPassword };
      clearTextInput();
      Toast.show({
        type: "success",
        position: "top",
        topOffset: 0,
        text1: "Password changed successfully",
      });
    }
  };
  return (
    <>
      <SafeAreaView>
        <Toast config={toastConfig} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginHorizontal: 30 }}>
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
            <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
              <Button
                title="Change Password"
                onPress={changePassword}
                color="purple"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChangePasswordScreen;
