import { SingleUseEffect } from "./effect";
import { ItemWithCount, giveItem } from "./item";

export abstract class GiveItemEffect extends SingleUseEffect {
  /** The items to give. */
  abstract items: ItemWithCount | ItemWithCount[];

  public stackable = true;

  public onActivate() {
    // resolve the items array or single item to an array
    const items = Array.isArray(this.items) ? this.items : [this.items];

    items.forEach((item) => {
      // resolve the item count
      const resolvedCount = typeof item.count === 'function'
        ? item.count()
        : item.count;

      // give the item
      giveItem(item.item, resolvedCount);
    });
  }
}
