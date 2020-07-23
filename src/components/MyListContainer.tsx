import React from 'react';
import {Provider} from 'react-redux';
import Items from './Items';
import Submit from './Submit';
import {createStore} from 'redux';
import reducer from '../reducers/itemReducer';

export function MyListContainer() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Items />
      <Submit />
    </Provider>
  );
}
