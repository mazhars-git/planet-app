import { View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function Details() {
  return (
    <SafeAreaView style= {styles.container}>
        <PlanetHeader />
        <Text>Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,

    }
})