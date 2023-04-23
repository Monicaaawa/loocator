import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

export default function SettingScreen({navigation}){
    const [darkMode, setDarkMode] = useState(false);
    return(
        <View style={styles.container}>
            {/* <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <Switch
                    value={darkMode}
                    onValueChange={(value) => {
                        setDarkMode(value);
                        EventRegister.emit('ChangeTheme', value);
                        console.log("Mode changed");
                    }}
                />
            </View> */}

        <Text style={{ marginTop: 30, fontSize: 20}}> loocator v1.0.0 </Text>
        <Image
            style={styles.image}
            source={require('./assets/morefeatures.png')}/>        
        <Text style={{ marginTop: 50, fontSize: 15}}> copyrighted © 2023 </Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    image: {
        width: 400,
        height: 400,
        margin: 100,
        justifySelf: 'center'
    }
  });