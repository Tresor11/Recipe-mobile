import { StyleSheet, Text, View, Image} from 'react-native';

export default function MenuIcon() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../asset/menu-icon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 40,
    height: 40
  }
});