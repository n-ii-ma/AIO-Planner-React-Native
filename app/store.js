import {configureStore} from '@reduxjs/toolkit';

import remainingTasksSliceReducer from '../features/remainingTasks/remainingTasksSlice';
import tasksSliceReducer from '../features/task/tasksSlice';
import weatherSliceReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
    remainingTasks: remainingTasksSliceReducer,
    weather: weatherSliceReducer,
  },
});
