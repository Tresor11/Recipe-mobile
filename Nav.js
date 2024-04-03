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
      <View>
        <TextInput style={styles.input} placeholder="Search for a recipe" />
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});