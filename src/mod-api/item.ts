import { ReactElement } from "react";
import store from "../store";
import { SET_ITEM, GIVE_ITEM, TAKE_ITEM } from "../actions";

/** An Item */
export abstract class Item {
  abstract name: string | ReactElement;
}

export function getItem(item: typeof Item) {
  return store.getState().items[item.name] || 0;
}
export function setItem(item: typeof Item, count: number) {
  return store.dispatch(SET_ITEM({ item, count }));
}
export function giveItem(item: typeof Item, count: number) {
  return store.dispatch(GIVE_ITEM({ item, count }));
}
export function takeItem(item: typeof Item, count: number) {
  return store.dispatch(TAKE_ITEM({ item, count }));
}
