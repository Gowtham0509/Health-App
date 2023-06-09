import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AppInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons size={20} name={icon} style={styles.icon} />
      <TextInput {...otherProps} style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e6e6e6",
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    marginVertical: 15,
  },
  input: {
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
export default AppInput;
