import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function Menu() {
  const [menu, setMenu] = useState([]);
  // let menu = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  useEffect(() => {
    async function getMenu() {
        const menu = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const menuJson = await menu.json();
        setMenu(menuJson.categories);
    }
    getMenu();
 }, [])

  if(!menu[0]) {
    return <Text>Loading...</Text>
  }else
  {
    return (
      <ScrollView>
        <View style={styles.container}>
          {menu.map((item) => {
            return <Item
            name={item.strCategory}
            image={{uri: item.strCategoryThumb}}
            description={item.strCategoryDescription}
            key={item.idCategory}
             />
          })}
        </View>
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