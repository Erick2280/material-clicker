import { Store } from 'redux';

import { ActionObject } from '../actions';

import itemsReducer from './items-reducer';

type Reducer = (<T>(state: T, action: ActionObject, fullState: Store) => T) | (<T>(state: T, action: ActionObject) => T);

function combineReducers(reducers: { [name: string]: Reducer }) {
  return (state: any = {}, action: any) => {
    const newState = Object.keys(reducers)
      .map(key => [key, (reducers[key] as any)(state[key], action, state)])
      .reduce((obj: any, prev: any) => ({ ...obj, [prev[0]]: prev[1] }), {});
    return newState;
  };
}

export default combineReducers({
  items: itemsReducer as Reducer
});