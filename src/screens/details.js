import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { MercurySvg, JupiterSvg, NeptuneSvg, MarsSvg, EarthSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { spacing } from './../theme/spacing';

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  const {name} = planet;
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
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,

    },
    imageView: {
      padding: spacing[5],
      alignItems: 'center',
      justifyContent: 'center',
    }
})