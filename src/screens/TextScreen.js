import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Type your name here:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Text>Your name is: {name}</Text>
      <Text style={styles.password}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      {password.length < 5 ? <Text>Password must be at least 5 characters</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  password: {
    marginTop: 30,
    borderTopColor: 'black',
    borderTopWidth: 2,
  }
});

export default TextScreen;
