import React from "react";
import { View, Text } from "react-native";

const BanderadeColombia = () => {
  return (
    <View
    style={{
      flexDirection: "colum",
      height: 200,
      padding: 20
    }}
    >
    <View style={{background: "#FCD116", flex: 60}}/>
    <View style={{background: "blue", flex: 20}}/>
    <View style={{background: "red", flex: 20}}/>
    <Text style={{fontSize: 15, textAlign: "center"}}>Que viva el Paro Nacional</Text>
    </View>

  );
};

export default BanderadeColombia;
