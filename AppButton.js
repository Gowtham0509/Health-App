import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const AppButton = ({ title, onPress, color = "#fc5c65" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    width: "100%",
    borderRadius: 25,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
export default AppButton;
