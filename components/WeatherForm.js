import {API_KEY} from '@env';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Searchbar, Button} from 'react-native-paper';

import {getWeather} from '../features/weather/weatherSlice';

const WeatherForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const apiAddress = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`;

  const handleSubmit = () => {
    if (!searchQuery) return;

    dispatch(getWeather(apiAddress));
  };

  return (
    <>
      <Searchbar
        value={searchQuery}
        onChangeText={query => setSearchQuery(query)}
        placeholder="City Name..."
      />
      <Button style={styles.button} mode="contained" onPress={handleSubmit}>
        Search
      </Button>
    </>
  );
};

export default WeatherForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
