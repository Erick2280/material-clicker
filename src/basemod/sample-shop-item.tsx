// tslint:disable: max-classes-per-file
import React from 'react';
import { ShopItem, register, item, GiveItemEffect } from '../mod-api';
import Material from './material';

/** A sample item in the shop. */
@register class SampleShopItem extends ShopItem {
  // Display Info
  name = 'Sample Shop Item';
  shortDescription = 'Does stuff.';
  longDescription = <>
    <p>
      It does stuff. That's all you really need to know.
    </p>
    <p>
      <em>Actually, It does NOTHING</em>
    </p>
  </>;

  // Functioning Info
  maxCount = -1;
  price = item(Material, () => this.count * 5 + 5); // level 1 = 5m, level 2 = 10m, 15, 20, etc.
  effects = [
    new SampleShopItemEffect()
  ];
  requirements = [ ];
}

/** the effect for the sample item. Gives 500 material :) */
@register class SampleShopItemEffect extends GiveItemEffect {
  items = item(Material, 500);
}

export default new SampleShopItem();
