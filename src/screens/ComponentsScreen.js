import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => (
  <Text style={styles.textStyle}>Component</Text>
)

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen;
