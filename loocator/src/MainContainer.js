import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import SettingScreen from './screens/SettingScreen.js'

//Screen names
const homeName = 'Home';
const profileName = 'Profile';
const settingName = 'Setting';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initial RouteName={homeName}
                screenOptions={
                    ({route})=>({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn == homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn == profileName){
                            iconName = focused ? 'list' : 'list-outline'; //TODO BROOKE: change logo later
                        } else if (rn == settingName){
                            iconName = focused ? 'settings' : 'settings-outline';
                        } 

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    "tabBarActiveTintColor": 0xA4BFFF,
                        "tabBarInactiveTintColor": "grey",
                        "tabBarLabelStyle": {
                            "paddingBottom": 10,
                            "fontSize": 10
                        },
                        "tabBarStyle": [
                            {
                            "display": "flex"
                            },
                            null
                        ],
                })}
                >
                
                <Tab.Screen name={homeName} component = {HomeScreen}/>
                <Tab.Screen name={profileName} component = {ProfileScreen}/>
                <Tab.Screen name={settingName} component = {SettingScreen}/>
            
            </Tab.Navigator>
        </NavigationContainer>
        // <View>
        //     <Text>This file is for Nav Bar stuff. Ignorime if not Brooke</Text>
        // </View>
    )
}