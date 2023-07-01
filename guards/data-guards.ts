import { SanityTypes } from "../types/sanity-data";

const isNull = (data: any | undefined | null) =>
  typeof data === "undefined" || data === null ? true : false;

/**
 * Loops through object. If any property value is null || undefined, it returns false else returns true
 * @param data Object
 * @returns boolean
 */
const propertyKeysNotNull = <T extends Record<any, any>>(data: T) => {
  const entries = Object.entries(data);
  for (const [_, value] of entries) {
    if (isNull(value)) return false;
  }
  return true;
};

/**
 * Ensures sanity data is correct
 * @param data undefined | SanityType.ClientCase
 */
export const clientCaseGuard = (
  data: SanityTypes.ClientCase[] | undefined
): SanityTypes.ClientCase[] => {
  if (!data) return [];

  return data.filter((v) => propertyKeysNotNull(v));
};
