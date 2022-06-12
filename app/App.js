import {StyleSheet, View} from 'react-native';
import React from 'react';

import TransactionPage from '../components/TransactionPage';
import TasksPage from '../components/TasksPage';
import WeatherPage from '../components/WeatherPage';

const App = () => {
  return (
    <View style={styles.container}>
      <TransactionPage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});
