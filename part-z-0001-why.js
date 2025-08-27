import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native for Web3 and AI Apps!..</Text>
      <Text style={styles.text}>Mustafa Buyukdereli was here...</Text>
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
    paddingBottom: 5,
  },
});
