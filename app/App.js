import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

import TransactionPage from '../components/TransactionPage';
import TasksPage from '../components/TasksPage';
import WeatherPage from '../components/WeatherPage';

const TransactionRoute = () => <TransactionPage />;
const TasksRoute = () => <TasksPage />;
const WeatherRoute = () => <WeatherPage />;

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'wallet', title: 'Wallet', icon: 'wallet', color: '#0DC807'},
    {
      key: 'tasks',
      title: 'Tasks',
      icon: 'checkbox-marked-circle-plus-outline',
      color: '#C100FF',
    },
    {
      key: 'weather',
      title: 'Weather',
      icon: 'weather-partly-lightning',
      color: '#FF007C',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    wallet: TransactionRoute,
    tasks: TasksRoute,
    weather: WeatherRoute,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
