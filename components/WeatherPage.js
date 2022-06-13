import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

import Weather from '../features/weather/Weather';
import WeatherForm from './WeatherForm';

const WeatherPage = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Weather />
        <WeatherForm />
      </View>
    </ScrollView>
  );
};

export default WeatherPage;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 25,
    width: '90%',
    marginBottom: 30,
  },
});
