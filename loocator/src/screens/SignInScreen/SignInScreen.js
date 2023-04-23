import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../../../firebase';

export default function SignInScreen({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return(
        <KeyboardAvoidingView style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {}}
                    style = {styles.button}
                >
                    <Text style={styles.buttonText}>login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style = {[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>create new account</Text>
                </TouchableOpacity>
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
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
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
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})