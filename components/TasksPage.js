import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import RemainingTasks from '../features/remainingTasks/RemainingTasks';
import TasksList from './TasksList';
import TasksForm from './TasksForm';
import {selectTasks} from '../features/task/tasksSlice';

const TasksPage = () => {
  const tasks = useSelector(selectTasks);

  return (
    <View style={styles.container}>
      {tasks.length ? <RemainingTasks /> : null}
      <TasksList />
      <TasksForm />
    </View>
  );
};

export default TasksPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    marginBottom: 30,
  },
});
