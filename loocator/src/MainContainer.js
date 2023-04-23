import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventRegister } from 'react-native-event-listeners';

let title = <Image
source={require('./screens/assets/duck-outline.png')} // Replace with your image source
style={{ width: 24, height: 24, marginRight: 8 }}
/>

//Screens
import HomeScreen from './screens/HomeScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import SettingScreen from './screens/SettingScreen.js'

//Screen names
// const homeName = 'Home';
// const profileName = 'Profile';
// const settingName = 'Setting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SplashScreen({navigation})
{
  setTimeout(() => {
    navigation.navigate("MainScreen");
  }, 2000);
  return (
    <View style={styles.container}>
    <Text style={styles.title}> loocator </Text>
    
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

function MainContainer(props){
    return(
        // <NavigationContainer>
        //     <Tab.Navigator 
        //         initial RouteName={HomeScreen}
        //         screenOptions={
        //             ({route})=>({
        //             tabBarIcon: ({focused, color, size}) => {
        //                 let iconName;
        //                 let rn = route.name;

        //                 if (rn == homeName){
        //                     iconName = focused ? 'home' : 'home-outline';
        //                 } else if (rn == profileName){
        //                     iconName = focused ? 'list' : 'list-outline'; //TODO BROOKE: change logo later
        //                 } else if (rn == settingName){
        //                     iconName = focused ? 'settings' : 'settings-outline';
        //                 } 

        //                 return <Ionicons name={iconName} size={size} color={color}/>
        //             },
        //             "tabBarActiveTintColor": 0xA4BFFF,
        //                 "tabBarInactiveTintColor": "grey",
        //                 "tabBarLabelStyle": {
        //                     "fontSize": 10
        //                 },
        //                 "tabBarStyle": [
        //                     {
        //                     "display": "flex"
        //                     },
        //                     null
        //                 ],
        //         })}
        //         >
                
        //         {/* <Tab.Screen name="SplashScreen" component = {SplashScreen}/> */}
        //         <Tab.Screen name={homeName} component = {HomeScreen}/>
        //         <Tab.Screen name={profileName} component = {ProfileScreen}/>
        //         <Tab.Screen name={settingName} component = {SettingScreen}/>
            
        //     </Tab.Navigator>
        // </NavigationContainer>

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
      width: 300,
      height: 300,
    },
  });  

  export default MainContainer;