import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function SettingScreen({navigation}){
    return(
        <View style={styles.container}>
            <Image
                style={styles.duckProfile}
                source={require('./assets/duck-profile.png')}/>
            <Text style={{ margin: 20, fontSize: 26 }}> ducky </Text>
            <Text style={{ marginTop: -15, fontSize: 20 }}> ducky@ducky.com </Text>

            <Text style={{ marginTop: 50, fontSize: 20 }}> 42 </Text>
            <Text style={{ fontSize: 20 }}> bathrooms visited </Text>
            <Text style={{ color: 'gray', fontSize: 15 }}> #1 worldwide </Text>

            <Text style={{ marginTop: 30, fontSize: 20 }}> 42 </Text>
            <Text style={{ fontSize: 20 }}> bathrooms rated </Text>
            <Text style={{ color: 'gray', fontSize: 15 }}> #1 worldwide </Text>

            <Text style={{ marginTop: 30, fontSize: 20 }}> 4.2 </Text>
            <Text style={{ fontSize: 20 }}> avg bathroom rating </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    duckProfile: {
      width: 180,
      height: 180,
      marginTop: 50,
    },
  });  