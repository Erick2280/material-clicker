import { createAction } from 'redux-starter-kit';
import { Item } from './mod-api';

export const GIVE_ITEM = createAction<{ item: typeof Item, count: number }>('give-item');
export const TAKE_ITEM = createAction<{ item: typeof Item, count: number }>('take-item');
export const SET_ITEM = createAction<{ item: typeof Item, count: number }>('set-item');
