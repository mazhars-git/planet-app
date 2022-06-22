import { View, SafeAreaView, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { MercurySvg, JupiterSvg, NeptuneSvg, MarsSvg, EarthSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { spacing } from './../theme/spacing';

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  const {name, description} = planet;
  console.log(planet);

  const renderImage = (name) =>{
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "mars":
        return <MarsSvg />;
      case "earth":
        return <EarthSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  }  
  return (
    <SafeAreaView style= {styles.container}>
        <PlanetHeader backBtn={true} />
        <ScrollView>
            <View style= {styles.imageView}>
                {renderImage(name)}
            </View>
            <View style= {styles.detailView}>
              <Text preset="h1" style={styles.name}>
                  {name}
              </Text>
              <Text style={styles.description}>
                  {description}
              </Text>
              <Pressable style = {styles.source}>
                  <Text>Source: </Text>
                  <Text preset="h4" style={styles.wikipedia}>Wikipedia</Text>
              </Pressable>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,

    },
    imageView: {
      margin: spacing[5],
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailView: {
      alignItems: 'center',
      marginVertical: spacing[4],
      marginHorizontal: spacing[5],

    },
    name: {
      textTransform: 'uppercase'
    },
    description: {
      textAlign: 'center',
      lineHeight: 21,
      marginVertical: spacing[3]
    },
    source: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    wikipedia: {
      textDecoration: 'underlain',
      fontWeight: 'bold'
    }
})