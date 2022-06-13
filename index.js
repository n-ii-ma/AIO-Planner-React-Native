/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import App from './app/App';
import {store} from './app/store';
import {name as appName} from './app.json';

const persistor = persistStore(store);

const root = () => (
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </PersistGate>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => root);
