import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import Item from '../components/CategoryPreview';

export default function Category({route, navigation}) {
  const recipeId = route.params.recipeId;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getMenu() {
        const menu = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        const menuJson = await menu.json();
        setMenu([menuJson.meals]);
    }
    getMenu();
 }, [])

  if(!menu[0]) {
    return <Text>Loading...</Text>
  }else
  {
    return (
      <ScrollView>
        <Text>{route.params.recipeId}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    paddingTop: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
});