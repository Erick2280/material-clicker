import { IdClass } from './id-class';

export * from './item';
export * from './shop-item';
export * from './effect';
export * from './effect-helpers';

/** Decorator function for registering an IdClass instance (any of the moddable classes) */
export function register<T extends typeof IdClass>(Class: T, ...args: any[]) {
  console.log('Register Class', Class.name);
}
