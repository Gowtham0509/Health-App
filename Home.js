import React from "react";


import {
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import AppButton from "./AppButton";
const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <Text style={styles.appname}>Health App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton color="#FF4E00" title={"Login"} onPress={()=>{navigation.navigate("LoginForm")}}/>
        <AppButton color="#FF4E00" title={"Register"} onPress={()=>{navigation.navigate("Register")}} />
        <AppButton color="#FF4E00" title={"Hospital Login"} onPress={()=>{navigation.navigate("HospitalLoginForm")}}/>
        <AppButton color="#FF4E00" title={"Hospital Register"} onPress={()=>{navigation.navigate("HospitalRegister")}} />
        <AppButton color="#FF4E00" title={"View Patient Details"} onPress={()=>{navigation.navigate("PatientTable")}} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 250,
  },
  appname: {
    fontSize: 30,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
export default Home;
