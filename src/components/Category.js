import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Pressable } from 'react-native';

export default function Category({name, image, description, navigation, recipeId}) {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => navigation.navigate('Recipe', {recipeId: recipeId})}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image}/>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={{fontWeight: "bold", fontSize: 16}}>{name}</Text>
        <Text style={{fontWeight: "bold",color: "#A8A8A8", marginTop: 5}}>{Math.floor(Math.random() * 100) + 1} recipes</Text>
      </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 150,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },

  descriptionContainer: {
    width: 100,
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    paddingTop: 10,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  item: {
    display: 'flex',
    margin: 10,
    width: '40%',
  },
});
