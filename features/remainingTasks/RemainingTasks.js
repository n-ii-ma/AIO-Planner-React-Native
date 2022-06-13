import {StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectTasks} from '../task/tasksSlice';
import {selectRemainingTasks, updRemainingTasks} from './remainingTasksSlice';

const RemainingTasks = () => {
  const tasks = useSelector(selectTasks);
  const remainingTasks = useSelector(selectRemainingTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    // Get the number of incomplete tasks
    const incompleteTasksNum = tasks.filter(task => !task.completed).length;

    dispatch(updRemainingTasks(incompleteTasksNum));
  }, [dispatch, tasks]);

  return (
    <>
      {remainingTasks > 1 ? (
        <Text style={styles.text}>{remainingTasks} Tasks Left</Text>
      ) : (
        <Text style={styles.text}>{remainingTasks} Task Left</Text>
      )}
    </>
  );
};

export default RemainingTasks;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    marginBottom: 23,
  },
});
