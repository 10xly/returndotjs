/**
 * Sets the value to be returned by the next intercepted function call.
 * @param value - The value that the next call to a member of `functions` will return.
 */
export function _return(value: any): void

/**
 * A Proxy-wrapped object where every property access that results in a function
 * will execute the underlying function but return the value previously set via `_return`.
 */
export const functions: {
  [key: string]: (...args: any[]) => any
}