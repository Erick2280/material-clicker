import { createReducer } from "redux-starter-kit";
import { GIVE_ITEM, TAKE_ITEM, SET_ITEM } from "../actions";

/** Item Reducer State */
export interface RItems {
  [internalItemID: string]: number;
}

// TODO: fully figure out resolving the 'internal item id'

const itemsReducer = createReducer(
  {} as RItems,
  {
    // Giving items. This means incrementing an item count.
    [GIVE_ITEM.type]: (state, { payload }: ReturnType<typeof GIVE_ITEM>) => {
      state[payload.item.name] = (state[payload.item.name] || 0) + payload.count;
    },
    // Taking items. This means decrementing an item count. The minimum count is 0.
    [TAKE_ITEM.type]: (state, { payload }: ReturnType<typeof GIVE_ITEM>) => {
      state[payload.item.name] = Math.max(0, (state[payload.item.name] || 0) - payload.count);
    },
    // Setting items. This means setting an item's exact count. The minimum count is 0.
    [SET_ITEM.type]: (state, { payload }: ReturnType<typeof GIVE_ITEM>) => {
      state[payload.item.name] = Math.max(0, payload.count);
    }
  }
);

export default itemsReducer;
