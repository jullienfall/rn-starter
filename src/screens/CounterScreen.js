import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + 1};
    case 'DECREMENT_COUNTER':
        return { ...state, counter: state.counter - 1};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button color="green" title="Increase" onPress={() => dispatch({ type: 'INCREMENT_COUNTER' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'DECREMENT_COUNTER' })} />
      <Text style={styles.text}>Current Counter: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
