import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title="Layout" onPress={() => navigation.navigate('Layout')} />
      <Button title="ComponentsScreen" onPress={() => navigation.navigate('ComponentsScreen')} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
