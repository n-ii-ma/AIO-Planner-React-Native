import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';

import {selectTasks} from '../features/task/tasksSlice';
import Task from '../features/task/Task';

const TasksList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <View style={{marginBottom: 20}}>
      {!tasks.length ? (
        <Text style={styles.noTask}>No Tasks to Show</Text>
      ) : (
        tasks.map(task => (
          <View key={task.id}>
            <Card
              elevation={10}
              style={[styles.card, {opacity: task.completed ? 0.5 : 1}]}>
              <Task task={task} />
            </Card>
          </View>
        ))
      )}
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 5,
  },
  noTask: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
});
