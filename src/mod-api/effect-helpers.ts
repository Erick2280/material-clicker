// tslint:disable: max-classes-per-file
import { SingleUseEffect, OngoingEffect } from "./effect";
import { ItemWithCount, giveItem } from "./item";
import { OptionalDynamicArray } from "../type-helpers";
import { ShopItem } from "./shop-item";

/** Single Use Effect that gives some items. */
export abstract class GiveItemEffect extends SingleUseEffect {
  /** The items to give. */
  abstract items: OptionalDynamicArray<ItemWithCount>;

  public stackable = true;

  public onActivate() {
    // resolve the dynamic function.
    const resolvedDynamic = typeof this.items === 'function' ? this.items() : this.items;
    // resolve the items array or single item to an array
    const resolvedItems = Array.isArray(resolvedDynamic) ? resolvedDynamic : [resolvedDynamic];

    resolvedItems.forEach((item) => {
      // resolve the item count
      const resolvedCount = typeof item.count === 'function'
        ? item.count()
        : item.count;

      // give the item
      giveItem(item.item, resolvedCount);
    });
  }
}

/** Single Use Effect that unlocks a shop item. */
export abstract class UnlockShopItemEffect extends SingleUseEffect {
  /** The items to give. */
  abstract items: OptionalDynamicArray<ShopItem>;

  public onActivate() {
    throw new Error('Not Implemented');
  }
}

/** Single Use Effect that unlocks a panel. */
export abstract class UnlockPanelEffect extends SingleUseEffect {
  /** The panel to unlock. */
  abstract items: OptionalDynamicArray</*TODO: Panel*/never>;

  public onActivate() {
    throw new Error('Not Implemented');
  }
}

/** Ongoing Effect that gives items every amount of seconds. */
export abstract class ProducerEffect extends OngoingEffect {
  /** The items to give. */
  abstract items: OptionalDynamicArray<ItemWithCount>;
  /** Time in milliseconds (1000 = 1 second) */
  abstract time: number;

  public onActivate() {
    throw new Error('Not Implemented');
  }
  public onDeactivate() {
    throw new Error('Not Implemented');
  }
}
/** Ongoing Effect that gives items in a constant flow. */
export abstract class FlowingProducerEffect extends OngoingEffect {
  /** The items to give per second. */
  abstract itemsPerSecond: OptionalDynamicArray<ItemWithCount>;

  public onActivate() {
    throw new Error('Not Implemented');
  }
  public onDeactivate() {
    throw new Error('Not Implemented');
  }
}
