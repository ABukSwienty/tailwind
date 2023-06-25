/**
 * Remove null or undefined from array
 * @param array Array
 * @returns Array
 */
export const removeNull = <T>(array: (T | null | undefined)[]): T[] =>
  array.filter((item): item is T => item !== null && item !== undefined);
