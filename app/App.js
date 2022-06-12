import {StyleSheet, View} from 'react-native';
import React from 'react';

import TasksPage from '../components/TasksPage';

const App = () => {
  return (
    <View style={styles.container}>
      <TasksPage />
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
