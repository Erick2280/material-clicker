import { ItemsActionObject } from './action-types';

// TODO: Change this to the item interface and SciNum data structure.
export function addItem(item: string, amount: number): ItemsActionObject {
  return { type: 'ADD_ITEM', item, amount };
}
