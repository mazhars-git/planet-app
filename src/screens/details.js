import { View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  console.log(planet);
  return (
    <SafeAreaView style= {styles.container}>
        <PlanetHeader backBtn={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,

    }
})