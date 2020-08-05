import {createStore, Store, AnyAction} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import itemReducer from './reducers/itemReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, itemReducer);

const store: Store<any, AnyAction> = createStore(persistedReducer);
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};
export {getStore, getState, getPersistor};
export default {
  getStore,
  getState,
  getPersistor,
};
