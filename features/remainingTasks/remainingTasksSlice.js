import {createSlice} from '@reduxjs/toolkit';

const remainingTasksSlice = createSlice({
  name: 'remainingTasks',
  initialState: 0,
  reducers: {
    updRemainingTasks: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectRemainingTasks = state => state.remainingTasks;

// Action
export const {updRemainingTasks} = remainingTasksSlice.actions;

// Reducer
export default remainingTasksSlice.reducer;
