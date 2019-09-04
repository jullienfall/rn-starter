import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Component</Text>
      <Text style={styles.textStyle}>Hi, There</Text>
      <Button title="Click" />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

ComponentsScreen.navigationOptions = {
  title: 'Components Screen'
};

export default ComponentsScreen;
