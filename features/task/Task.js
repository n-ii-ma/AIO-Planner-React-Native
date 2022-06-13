import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Checkbox, IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {toggleComplete, removeTask} from './tasksSlice';

const Task = ({task}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task.text}</Text>
      <View style={styles.container}>
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          color="limegreen"
          onPress={() => dispatch(toggleComplete(task))}
        />
        <IconButton
          icon="delete"
          color="red"
          onPress={() => dispatch(removeTask(task))}
        />
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
});
