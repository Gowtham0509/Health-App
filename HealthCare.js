import React from 'react';
import {
    View,
    StyleSheet,
    Image,
  } from "react-native";

const HealthCare = () => {
   return (
    <Image style={styles.image} source={require("./assets/healthcare.jpg")} />
    
   )
}

const styles = StyleSheet.create({
    image: {
        
        width: 500,
        height: 1000,
        
    }
})
export default HealthCare