import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";

const CambiarText = () => {
  const [ titleText, setTitleText ] = useState ("nido de pajaro");
  const bodyText = useState("Esto no es realmente un nido de pajaro");

  const onPressTitle = () => {
    setTitleText("nido de pajaro [presionar]");
  };

  return (
    <Text style={styles.baseText}>
    <Text style={styles.titleText} onPress={onPressTitle}>
    {titleText}
        {"\n"}
        {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default CambiarText;
