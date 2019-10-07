import { createStore } from 'redux';

import rootReducer from './reducers';
import { Items } from './reducers/items-reducer';

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  reduxDevTools ? reduxDevTools() : undefined
);

export default store;

export interface Store {
  items: Items;
}
