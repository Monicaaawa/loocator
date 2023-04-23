import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventRegister } from 'react-native-event-listeners';

import HomeScreen from './screens/HomeScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import SettingScreen from './screens/SettingScreen.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SplashScreen({navigation})
{
  setTimeout(() => {
    navigation.navigate("MainScreen");
  }, 2000);
  return (
    <View style={styles.container}>
        <Image
            style={styles.title}
            source={require('./screens/assets/loocator-logo.png')}/>
        <Image
            style={styles.duckLogo}
            source={require('./screens/assets/loocator.gif')}/>
    </View>
  );
}

function MainScreen() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data);
            console.log("darkMode", data);
        })
        return () => {
            EventRegister.removeAllListeners(listener);
        }
    },[])

    return (
        <Tab.Navigator initialRouteName = "Home">
            <Tab.Screen
                name = "Setting"
                component = {SettingScreen}
                options = {{ title: '',
                    tabBarIcon: ({focused, size, color}) => (
                        <Ionicons style={{marginTop: 10}} name={focused ? 'settings' : 'settings-outline'} size={size} color='black'/>
                    ),
                    headerTitle: () => (
                        <Image style={{ width: 32, height: 32, marginBottom: 10}} source={require("./screens/assets/duck-outline.png")} />
                    )
                }}
            /> 

            <Tab.Screen
                name = "Home"
                component = {HomeScreen}
                options = {{ title: '',
                    tabBarIcon: ({focused, size, color}) => (
                        <Ionicons style={{marginTop: 10}} name={focused ? 'home' : 'home-outline'} size={size} color='black'/>
                    ),
                    headerTitle: () => (
                        <Image style={{ width: 32, height: 32, marginBottom: 10}} source={require("./screens/assets/duck-outline.png")} />
                    )
                }}
                initialParams={{ isDarkMode: darkMode }}
            />

            <Tab.Screen
                name = "Profile"
                component = {ProfileScreen}
                options = {{ title: '',
                    tabBarIcon: ({focused, size, color}) => (
                        <Ionicons style={{marginTop: 10}} name={focused ? 'person' : 'person-outline'} size={size} color='black'/>
                    ),
                    headerTitle: () => (
                        <Image style={{ width: 32, height: 32, marginBottom: 10}} source={require("./screens/assets/duck-outline.png")} />
                    )
                }}
            />  
        </Tab.Navigator>
    )
}

function MainContainer(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "SplashScreen" screenOptions={{headerShown: false,}}>
            <Stack.Screen
                name = "SplashScreen"
                component = {SplashScreen}
            />
            <Stack.Screen
                name = "MainScreen"
                component = {MainScreen}
            />
            </Stack.Navigator>
        </NavigationContainer>
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
      width: 200,
      height: 120,
      marginBottom: -60,
    },
    start: {
      fontSize: 20,
      borderColor: 'black',
      borderWidth: 2,
      padding: 8,
      borderRadius: 20
    },
    duckLogo: {
      width: 200,
      height: 200,
    },
  });  

  export default MainContainer;