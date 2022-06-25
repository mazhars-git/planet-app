import { View, FlatList, SafeAreaView, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({item}) =>{
  const {name, color} = item;
  const navigation = useNavigation();
  return (
      <Pressable onPress={() => {
            navigation.navigate("Details", {planet: item})
        }} style={styles.item}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.circle, {backgroundColor: color}]} />
              <Text preset="h4" style={styles.itemName}>
                  {name}
              </Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
      </Pressable>
  )
}


export default function Home({navigation}) {
    const [list, setList] = useState(PLANET_LIST);
    const renderItem = ({item}) =>{
    
    return(
      <PlanetItem item={item} />
    );
   }

   const searchFilter = (text) =>{
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLocaleLowerCase()
      const userInput = text.toLocaleLowerCase()

      return itemName.indexOf(userInput) > -1;
    })

    setList(filteredList);
    console.log("List:", filteredList)
   }


  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      
      <TextInput  
        placeholder="Type the planet name" 
        placeholderTextColor={colors.gray}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText = {(text) => searchFilter(text)}
      />

      <FlatList
          contentContainerStyle={styles.list}
          data={list}
          keyExtractor={(item) => item.name}
          renderItem= {renderItem}

          ItemSeparatorComponent={() =><View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  item:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    justifyContent: 'space-between',
  },

  itemName:{
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },

  list:{
    padding: spacing[4],
  },

  separator:{
    borderBottomColor: colors.white,
    borderWidth: 0.5, 
  },
  searchInput: {
    padding: spacing[5],
    margin: spacing[4],
    color: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
})