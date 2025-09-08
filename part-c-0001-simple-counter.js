import { useState } from 'react';
import { Text, View,  StyleSheet, Button } from 'react-native';

export default function Index() {

  const [counter, setCounter] = useState(0)

  function counterUp() {
    setCounter(counter + 1)
  }

  function counterDown() {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
    
      <Button title='Counter ++' onPress={counterUp} />
      <Text style={styles.text}>Counter Value: {counter}</Text>
      <Button title='Counter --' onPress={counterDown} />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#090101ff',
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
  },
});
