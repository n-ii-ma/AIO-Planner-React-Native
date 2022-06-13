import {StyleSheet, View} from 'react-native';
import React from 'react';

import Weather from '../features/weather/Weather';
import WeatherForm from './WeatherForm';

const WeatherPage = () => {
  return (
    <View style={styles.container}>
      <Weather />
      <WeatherForm />
    </View>
  );
};

export default WeatherPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '90%',
    marginBottom: 30,
  },
});
