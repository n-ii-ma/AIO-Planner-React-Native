import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TextInput, Button} from 'react-native-paper';

import {addTask} from '../features/task/tasksSlice';

const TasksForm = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!input) return;

    dispatch(addTask(input));

    setInput('');
  };

  return (
    <>
      <TextInput
        value={input}
        onChangeText={input => setInput(input)}
        label="Add Task"
        mode="outlined"
      />
      <Button style={styles.button} mode="contained" onPress={handleSubmit}>
        Add
      </Button>
    </>
  );
};

export default TasksForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
