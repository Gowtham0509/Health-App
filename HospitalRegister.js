import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import AppInput from "./AppInput";
const HospitalRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <Text style={styles.text}>Register Here</Text>
      </View>
      <AppInput placeholder="Hospital Name" icon={"account"} />
    
      <AppInput placeholder="Password" icon={"lock"} />
      <AppInput placeholder="Confirm Password" icon={"lock"} />
      <AppButton color="#FF4E00" title="Click Here to Register" onPress={()=>{navigation.navigate("HospitalLoginForm")}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    paddingVertical: 10,
  },
});

export default HospitalRegister;
