import { StyleSheet, Text, View, ScrollView, Image, Link} from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import Item from '../components/CategoryPreview';

export default function Category({route, navigation}) {
  const recipeId = route.params.recipeId;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getMenu() {
        const menu = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const menuJson = await menu.json();
        setMenu([menuJson.meals[0]]);
    }
    getMenu();
 }, [])

  if(!menu.length) {
    return <Text>Loading...</Text>
  }else
  {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: menu[0].strMealThumb}}/>
          </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{menu[0].strMeal}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>Cooking instructions</Text>
          <Text style={styles.instructions}>{menu[0].strInstructions}</Text>
          <WebView source={{uri: menu[0].strYoutube}} style={{marginTop: 20, height: 200}}/>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },

  imageContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    borderRadius: 25,
    height: 200,
    resizeMode: 'cover',
  },
  instructions: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 25,
    lineBreak: 'auto'
  }
});