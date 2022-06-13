import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';

import {
  selectWeatherToday,
  selectWeatherIsLoading,
  selectWeatherHasError,
} from './weatherSlice';
import IsLoading from '../../components/IsLoading';

const Weather = () => {
  const weatherToday = useSelector(selectWeatherToday);
  const weatherIsLoading = useSelector(selectWeatherIsLoading);
  const weatherHasError = useSelector(selectWeatherHasError);

  // Error alert
  useEffect(() => {
    if (weatherHasError) {
      Alert.alert('Network Error', 'Something Went Wrong!', [
        {
          text: 'OK',
        },
      ]);
    }
  }, [weatherHasError]);

  // If weather is being loaded render loading page
  if (weatherIsLoading) return <IsLoading />;

  return (
    <>
      {!weatherToday?.main ? null : (
        <View style={styles.container}>
          <Card elevation={10} style={styles.card}>
            <Text style={styles.city}>
              {weatherToday.name}, {weatherToday.sys.country}
            </Text>
            <Text style={styles.temp}>
              {Math.round(weatherToday.main.temp)}°C
            </Text>
            <Text style={styles.desc}>{weatherToday.weather[0].main}</Text>
          </Card>
        </View>
      )}
    </>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    padding: 10,
  },
  city: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'black',
  },
  temp: {
    marginBottom: 15,
    alignSelf: 'center',
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  desc: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'black',
  },
});
