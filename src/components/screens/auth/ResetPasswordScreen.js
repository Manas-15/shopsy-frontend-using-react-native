import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { styles, toastConfig } from "../../../style";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const clearTextInput = () => {
    setEmail("");
  };

  const resetPassword = () => {
    console.log("reset");
    if (email) {
      const formData = { email };
      clearTextInput();
      Toast.show({
        type: "success",
        position: "top",
        topOffset: 0,
        text1: "Password reset email sent. Please check your email...",
      });
    }
  };
  return (
    <>
      <SafeAreaView>
        <Toast config={toastConfig} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginHorizontal: 30 }}>
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
            <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
              <Button title="Reset" onPress={resetPassword} color="purple" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ResetPasswordScreen;
