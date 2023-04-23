import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

export default function SettingScreen({navigation}){
    const [darkMode, setDarkMode] = useState(false);
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=>navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    Settings Screen
            </Text>
            <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <Switch
                    value={darkMode}
                    onValueChange={(value) => {
                        setDarkMode(value);
                        EventRegister.emit('ChangeTheme', value);
                        console.log("Mode changed");
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });