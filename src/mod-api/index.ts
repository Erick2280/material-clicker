import { IdClass } from './id-class';

export * from './item';
export * from './shop-item';
export * from './effect';
export * from './effect-helpers';

export function register<T extends typeof IdClass>(Class: T) {
  console.log(Class, typeof Class);
}
