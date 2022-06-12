import {configureStore} from '@reduxjs/toolkit';

import remainingTasksSliceReducer from '../features/remainingTasks/remainingTasksSlice';
import tasksSliceReducer from '../features/task/tasksSlice';
import transactionsSliceReducer from '../features/transaction/transactionsSlice';
import weatherSliceReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsSliceReducer,
    remainingTasks: remainingTasksSliceReducer,
    tasks: tasksSliceReducer,
    weather: weatherSliceReducer,
  },
});
