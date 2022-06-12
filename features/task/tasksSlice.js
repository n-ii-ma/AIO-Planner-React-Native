import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid.v4(),
        text: action.payload,
        completed: false,
      };

      state.push(newTask);
    },
    toggleComplete: (state, action) => {
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });
    },
    removeTask: (state, action) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id);

      if (taskIndex !== -1) {
        state.splice(taskIndex, 1);
      }
    },
  },
});

// Selector
export const selectTasks = state => state.tasks;

// Actions
export const {addTask, toggleComplete, removeTask} = tasksSlice.actions;

// Reducer
export default tasksSlice.reducer;
