/**
 * "Optional Dynamic" means the value can be "dynamic" by passing a function instead of the direct result. But optional.
 *
 * Example: a \
 * Example: () => a
 */
export type OptionalDynamic<T> = T | (() => T);
/**
 * "Optional Array" means you are allowed to do a simple shorthand of passing the value itself instead of an array of length 1.
 * You can still pass an array of one, or more.
 *
 * Example: a \
 * Example: [a, b]
 */
export type OptionalArray<T> = T | T[];
/**
 * OptionalDynamicArray combines both Dynamic and Array, in that order.
 *
 * Example: () => [a, b] \
 * Example: () => a \
 * Example: a \
 * Example: [a, b]
 */
export type OptionalDynamicArray<T> = OptionalDynamic<OptionalArray<T>>;
