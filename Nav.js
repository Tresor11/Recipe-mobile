import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import MenuIcon from './src/components/MenuIcon';

export default function Nav() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText}>See what others {"\n"} Are making</Text>
        <MenuIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  navText: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});