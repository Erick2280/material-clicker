import syncReducer from 'sync-reducer';

import { ItemsActionObject } from '../actions';

export interface Items {
  material: number;
}

const initialState: Items = {
  material: 0
};

function itemsReducer(state: Items = initialState, action: ItemsActionObject) {
  if(action.type === 'ADD_ITEM') {
    const newState = { ...state };

    // TODO: this.

    return newState;
  }

  return state;
}

export default syncReducer(itemsReducer, 'items-reducer');
