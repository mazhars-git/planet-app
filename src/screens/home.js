import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
          data={PLANET_LIST}
          renderItem= {({item, index}) =>{
            return(
              <View>
                  <Text>
                      {item.name}
                  </Text>
              </View>
            );
          }}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
})