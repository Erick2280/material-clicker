import { ReactElement } from "react";
import { Item, ItemWithCount } from "./item";
import { Effect } from "./effect";
import { OptionalDynamicArray, OptionalDynamic, OptionalArray } from "../type-helpers";

/** An Item in the Shop */
export abstract class ShopItem extends Item {
  static classType = 'ShopItem';

  /** A one sentence description of the shop item. Can be dynamic. */
  abstract shortDescription: OptionalDynamic<string | ReactElement>;
  /** A longer description, no length limit. Recommended to use React + multiple <p> elements. Can be dynamic. */
  abstract longDescription: OptionalDynamic<string | ReactElement>;
  /** The price of the item. Can be dynamic based on level. */
  abstract price: OptionalDynamicArray<ItemWithCount>;
  /** The effects of the item */
  abstract effects: OptionalDynamicArray<Effect>; // TODO
  /** The maximum number of times you can buy this item */
  abstract maxCount: number;
  /** The required items you need before unlock this */
  abstract requirements: OptionalArray<ItemWithCount>;
}
