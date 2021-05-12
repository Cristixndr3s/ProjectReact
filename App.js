
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldAndColor = () => {
  return (
    <Text style = {styles.baseText}>
    Yo soy Cristian
    <Text style = {styles.innerText}> y soy ingeniero electronico </Text>
    </Text>
  );
};

const styles = StyleSheet.create ({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndColor;
