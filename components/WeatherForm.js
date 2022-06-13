import {API_KEY} from '@env';
import {
  StyleSheet,
  View,
  AppState,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Searchbar, Button, IconButton} from 'react-native-paper';

import {getWeather} from '../features/weather/weatherSlice';

const WeatherForm = () => {
  const appState = useRef(AppState.currentState);

  const [searchQuery, setSearchQuery] = useState('');

  // Latitude and longitude state
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const dispatch = useDispatch();

  const apiAddress = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`;
  const gpsAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

  // Request location access
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Set the location coordinates
        Geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            Alert.alert('Error', error.message, [
              {
                text: 'OK',
              },
            ]);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (err) {
      Alert.alert('Error', err, [
        {
          text: 'OK',
        },
      ]);
    }
  };

  // Check location access
  const checkLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted) {
        // Set the location coordinates
        Geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            Alert.alert('Error', error.message, [
              {
                text: 'OK',
              },
            ]);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (err) {
      Alert.alert('Error', err, [
        {
          text: 'OK',
        },
      ]);
    }
  };

  // Request location access and set the coordinates
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Check if the app is in the foreground or background
  // If it is in the foreground, check location access
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        checkLocationPermission();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // Search weather
  const handleSubmit = () => {
    if (!searchQuery) return;

    dispatch(getWeather(apiAddress));
  };

  // Get weather by GPS coordinates
  const handleGpsSubmit = async () => {
    // Check whether permissions has been granted
    const checked = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (!checked) {
      Alert.alert(
        'Location Access Required',
        'Please allow location access for this app in App Settings.',
        [
          {
            text: 'OK',
          },
        ],
      );
    } else {
      dispatch(getWeather(gpsAddress));
      setSearchQuery('');
    }
  };

  return (
    <>
      <Searchbar
        value={searchQuery}
        onChangeText={query => setSearchQuery(query)}
        placeholder="City Name..."
        onSubmitEditing={handleSubmit}
      />
      <View style={styles.container}>
        <Button style={styles.button} mode="contained" onPress={handleSubmit}>
          Search
        </Button>
        <IconButton
          icon="crosshairs-gps"
          color="#FF007C"
          size={30}
          onPress={handleGpsSubmit}
        />
      </View>
    </>
  );
};

export default WeatherForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '85%',
  },
});
