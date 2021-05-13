import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Intentando construir un portafolio movil </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9FD",
    alignItems: "center",
    justifyContent: "center"
  }
});
