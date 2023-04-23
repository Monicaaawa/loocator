import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({navigation}){
    const [firstVisit, setFirstVisit] = useState(true);
    useEffect(() => {
        // Check if the user has visited the page before
        const hasVisited = AsyncStorage.getItem('hasVisitedProfile');
    
        if (hasVisited) {
          // User has visited before, set firstVisit to false
          setFirstVisit(false);
        } else {
          // User is visiting for the first time, set firstVisit to true and store in local storage
          AsyncStorage.setItem('hasVisitedProfile', true);
          setFirstVisit(true);
        }
      }, []);

      useEffect(() => {
        // Navigate to sign-in page on first visit
        if (firstVisit) {
          navigation.navigate('SignIn');
        }
      }, [firstVisit, navigation]);
    
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
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        // <Text>profile here</Text>
        // </View>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     {navigation.navigate('SignIn')}
        //     {/* <Text
        //         onPress={()=>navigation.navigate('SignIn')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}> Profile Screen</Text> */}
        // </View>
    );
}

// import { useNavigation } from '@react-navigation/core'
// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// // import { auth } from '../../firebase'

// const ProfileScreen = () => {
//   const navigation = useNavigation()

//   const handleSignOut = () => {
//     // auth
//     //   .signOut()
//     //   .then(() => {
//     //     navigation.replace("Login")
//     //   })
//     //   .catch(error => alert(error.message))
//   }

//   return (
//     <View style={styles.container}>
//       {/* <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity
//         onPress={handleSignOut}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sign out</Text>
//       </TouchableOpacity> */}
      
//     </View>
//   )
// }

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
// export default ProfileScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//    button: {
//     backgroundColor: '#0782F9',
//     width: '60%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })
