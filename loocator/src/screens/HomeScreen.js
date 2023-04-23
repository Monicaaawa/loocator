import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import MapStyles from '../MapStyles.json';

export default function HomeScreen({navigation}) {
  const [RestroomLocations, setRestroomLocations] = useState(null);

  const [mapRegion, setMapRegion] = useState({
    latitude: 34.068921,
    longitude: -118.4451811,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    console.log(location);
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    })
  
    const API_KEY = 'AIzaSyDf9CNfxLJqX2b2DcXKLnEW2F2fba4AtjI';
    const radius = 1000;
    const keyword = 'restroom';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}&keyword=${keyword}&key=${API_KEY}`;
    
    try {
      const response = await axios.get(url);
      console.log(response);
      const results = response.data.results;
      const restroomLocations = results.map(result => ({
        name: result.name,
        address: result.vicinity,
        location: result.geometry.location,
      }));
      setRestroomLocations(restroomLocations);
      console.log(restroomLocations);
    } catch (error) {
      console.error(error);
    }
    
  
  }

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={{height:'100%', width: '100%'}}
        customMapStyle={MapStyles}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        {RestroomLocations && RestroomLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.location.lat,
              longitude: location.location.lng,
            }}
            title={location.name}
            description={location.address}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});