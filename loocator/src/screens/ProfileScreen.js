import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=>navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Profile Screen</Text>
        </View>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     {navigation.navigate('SignIn')}
        //     {/* <Text
        //         onPress={()=>navigation.navigate('SignIn')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}> Profile Screen</Text> */}
        // </View>
    );
}