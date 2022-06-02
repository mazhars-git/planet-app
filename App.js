import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';

export default function App() {

  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  })

  if(!loaded){
    <Text>Font loading ..........</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={{color: colors.white, fontFamily: 'Antonio-Medium', fontSize: spacing[4]}}>Open up App.js to start working on your app!</Text>
      <Text style={{color: colors.white, marginTop: spacing[4], fontFamily: 'Spartan-Bold', fontSize: spacing[4]}}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
