import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button color="#66bbc4" title="Go to Components Demo" onPress={() => navigation.navigate('Components')} />
      <Button color="#418a82" title="Go to list demo" onPress={() => navigation.navigate('List')} />
      <Button color="#66bbc4" title="Image Screen" onPress={() => navigation.navigate('Image')} />
      <Button color="#418a82" title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button color="#66bbc4" title="Color" onPress={() => navigation.navigate('Color')} />
      <Button color="#418a82" title="Square Screen" onPress={() => navigation.navigate('Square')} />
      <Button color="#66bbc4" title="Text Screen" onPress={() => navigation.navigate('Text')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
    color: '#16626e',
  },
});

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
