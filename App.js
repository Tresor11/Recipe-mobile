import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
});
