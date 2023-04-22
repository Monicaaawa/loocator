import * as React from 'react';
import MainContainer from './src/MainContainer';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen.js';
import StartScreen from './src/screens/StartScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <StartScreen />
      <MainContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
