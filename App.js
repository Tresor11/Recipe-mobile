import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';
import Menu from './Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Menu />
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
