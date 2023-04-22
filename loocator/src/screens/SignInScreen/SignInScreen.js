import * as React from 'react';
import { View, Text } from 'react-native';

export default function SignInScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=>alert('This is the "Signin" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Signin Screen</Text>
            <Text></Text>
            
        </View>
    );
}