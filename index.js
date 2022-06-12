/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import App from './app/App';
import {store} from './app/store';
import {name as appName} from './app.json';

const root = () => {
  <StoreProvider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </StoreProvider>;
};

AppRegistry.registerComponent(appName, () => root);
