import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import remainingTasksSliceReducer from '../features/remainingTasks/remainingTasksSlice';
import tasksSliceReducer from '../features/task/tasksSlice';
import transactionsSliceReducer from '../features/transaction/transactionsSlice';
import weatherSliceReducer from '../features/weather/weatherSlice';

const rootReducer = combineReducers({
  transactions: transactionsSliceReducer,
  remainingTasks: remainingTasksSliceReducer,
  tasks: tasksSliceReducer,
  weather: weatherSliceReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['weather'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
