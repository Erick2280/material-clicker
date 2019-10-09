import React from 'react';
import { ShopItem, register, item } from '../mod-api';
import Material from './material';

/** A sample item in the shop. */
class SampleShopItem extends ShopItem {
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
  price = item(Material, 5);
  effects = [ ]; // TODO
  requirements = [ ];
}

export default register(SampleShopItem);
