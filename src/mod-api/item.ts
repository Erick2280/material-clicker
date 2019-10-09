import { ReactElement } from "react";
import store from "../store";
import { SET_ITEM, GIVE_ITEM, TAKE_ITEM } from "../actions";
import { IdClass } from "./id-class";

/** An Item */
export abstract class Item extends IdClass {
  abstract name: string | ReactElement;

  public get count() {
    return getItemCount(this);
  }
  public set count(count: number) {
    setItemCount(this, count);
  }
  public give(count: number) {
    giveItem(this, count);
  }
  public take(count: number) {
    takeItem(this, count);
  }
}

export function getItemCount(item: Item) {
  return store.getState().items[item.toString()] || 0;
}
export function setItemCount(item: Item, count: number) {
  store.dispatch(SET_ITEM({ item, count }));
}
export function giveItem(item: Item, count: number) {
  store.dispatch(GIVE_ITEM({ item, count }));
}
export function takeItem(item: Item, count: number) {
  store.dispatch(TAKE_ITEM({ item, count }));
}

export interface ItemWithCount {
  item: Item;
  count: number | (() => number);
}

export function item(item: Item, count: number | (() => number)): ItemWithCount {
  return { item, count };
}
