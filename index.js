import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './filmSearcher/reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['reducer1'],
    whitelist: ['reducer2'],
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const myStore = createStore(persistedReducer, applyMiddleware(thunk,logger));
export const mypersistor = persistStore(myStore);

const MyEntryPoint = () => (
    <Provider store={myStore}>
        <PersistGate loading={null} persistor={mypersistor}>
            <App/>
        </PersistGate>
        
    </Provider>
)

AppRegistry.registerComponent(appName, () => MyEntryPoint);

