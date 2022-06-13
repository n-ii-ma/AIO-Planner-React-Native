import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import TransactionPage from '../components/TransactionPage';
import TasksPage from '../components/TasksPage';
import WeatherPage from '../components/WeatherPage';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TransactionPage />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
});
