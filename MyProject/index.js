/**
 * @format
 */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json'; 
AppRegistry.registerComponent(appName, () => App);
*/ 
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//React Redux Configuration --- Step 1 get the Libraries
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

//Import the Reducers  --- Step 2 get the Reducers
import reducers from './src/reducer/index.js';

// Step 3 create the Store with the Middleware
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore,
);

const appWithRedux = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appWithRedux);
