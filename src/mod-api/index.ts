import { Item } from './item';
import { ShopItem } from './shop-item';

export * from './item';
export * from './shop-item';

export function register(Class: typeof Item | typeof ShopItem) {
  const instance = new Class();
  return instance;
}
