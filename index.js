import React from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers';
import UserContainer from './src/containers/UserContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import RootSaga from './src/sagas/RootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <UserContainer/>
    </Provider>
);
sagaMiddleware.run(RootSaga);
AppRegistry.registerComponent('scheduleApp', () => App);