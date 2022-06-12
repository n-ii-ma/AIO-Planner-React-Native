import {configureStore} from '@reduxjs/toolkit';

import remainingTasksSliceReducer from '../features/remainingTasks/remainingTasksSlice';
import tasksSliceReducer from '../features/task/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
    remainingTasks: remainingTasksSliceReducer,
  },
});
