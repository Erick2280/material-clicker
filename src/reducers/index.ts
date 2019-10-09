import itemsReducer from './items-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  items: itemsReducer
});
