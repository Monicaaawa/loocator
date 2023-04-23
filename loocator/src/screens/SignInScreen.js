import * as React from 'react';
<<<<<<< HEAD:loocator/src/screens/SignInScreen/SignInScreen.js
import { useState } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
=======
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
>>>>>>> eea053d (linked login & profile pages):loocator/src/screens/SignInScreen.js
import { TextInput } from 'react-native-gesture-handler';
// import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SignInScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState(false)
    // const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user){
    //             navigation.replace("Profile")
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    const handleSignUp = () => {
        setProfile(true)
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log('Registered with:', user.email);
        //     })
        //     .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        setProfile(true)
        // auth
        //     .signInWithEmailAndPassword(email,password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log('Loggied in with:', user.email);
        //     })
        //     .catch(error => alert(error.message))
    }

    return(
<<<<<<< HEAD:loocator/src/screens/SignInScreen/SignInScreen.js
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image style={{ width: 100, height: 100, marginBottom: 10}} source={require("./bath-duck.png")}/>
=======
        profile ? navigation.navigate('Profile') : 
        <KeyboardAvoidingView style={styles.container}
            behavior="padding"
        >
>>>>>>> eea053d (linked login & profile pages):loocator/src/screens/SignInScreen.js
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "e-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor= 'black'
                    style = {styles.input}
                />

                <TextInput
                    placeholder = "password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style = {styles.input}
                    placeholderTextColor= 'black'
                    secureTextEntry
                />
<<<<<<< HEAD:loocator/src/screens/SignInScreen/SignInScreen.js
                
                <TouchableOpacity onPress={() => {}} style = {styles.input}>
=======
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style = {styles.button}
                >
>>>>>>> eea053d (linked login & profile pages):loocator/src/screens/SignInScreen.js
                    <Text style={styles.buttonText}>login</Text>
                </TouchableOpacity>

                {/* FIX THE NAVIGATION TO SIGN UP PAGE */}
                <Text style={styles.signUpText}>don't have an account? <Text onPress={()=>navigation.navigate('SignUpScreen')}>sign up! </Text></Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    inputContainer:{
        width: '80%',
    },
    input:{
        backgroundColor:'lightgray',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        fontSize: 15,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop:5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText:{
        color: 'black',
        fontSize: 15,
        alignSelf: 'center'
    },
    signUpText:{
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 15,
    },
    buttonOutlineText:{
        color: 'black',
        fontSize: 15,
    },
})

export default SignInScreen;