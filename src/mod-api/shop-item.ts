import { ReactElement } from "react";
import { Item, ItemWithCount } from "./item";

/** An Item in the Shop */
export abstract class ShopItem extends Item {
  /** The title of the shop item. */
  abstract name: string | ReactElement;
  /** A one sentence description of the shop item. Can be dynamic. */
  abstract shortDescription: string | ReactElement | (() => (string | ReactElement));
  /** A longer description, no length limit. Recommended to use React + multiple <p> elements. Can be dynamic. */
  abstract longDescription: string | ReactElement | (() => (string | ReactElement));
  /** The price of the item. Can be dynamic based on level. */
  abstract price: ItemWithCount | ItemWithCount[];
  /** The effects of the item */
  abstract effects: any[]; // TODO
  /** The maximum number of times you can buy this item */
  abstract maxCount: number;
  /** The required items you need before unlock this */
  abstract requirements: ItemWithCount | ItemWithCount[];
}
