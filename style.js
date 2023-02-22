import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  labelText: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 15,
  },
  inputWithLabel: {
    marginBottom: 10,
    marginTop: 5,
  },
});

const toastConfig = {
  warning: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "orange",
        padding: 4,
      }}
    >
      <Text style={{ color: "#fff", marginLeft: 10 }}>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
  success: ({ text1, props }) => (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "green",

        padding: 4,
      }}
    >
      <Text style={{ color: "#fff", marginLeft: 10 }}>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export { styles, toastConfig };
