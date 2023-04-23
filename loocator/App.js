import * as React from 'react';
import MainContainer from './src/MainContainer';
import HomeScreen from "./src/screens/HomeScreen.js"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Image } from 'react-native';

// function SplashScreen({navigation})
// {
//   setTimeout(() => {
//     navigation.navigate('Home');
//   }, 2000);
//   return (
//     <View style={styles.container}>
//     <Text style={styles.title}> loocator </Text>
    
//     <Image
//         style={styles.duckLogo}
//         source={require('./src/screens/assets/rubber-duck.png')}/>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <MainContainer/>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName = "SplashScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen
          name = "SplashScreen"
          component = {SplashScreen}
        />
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
        />
        <Stack.Screen
          name = "MainContainer"
          component = {MainContainer}
        />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  start: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 8,
    borderRadius: 20
  },
  duckLogo: {
    width: 150,
    height: 150,
    margin: 50,
  },
});  
