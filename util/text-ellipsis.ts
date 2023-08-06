/**
 * Returns a string with ellipsis if the string is longer than the take parameter
 *
 * @example
 * textEllipsis('Hello World', 5) // 'Hello...'
 * textEllipsis('Hello World', 20) // 'Hello World'
 *
 * @param text string
 * @param take number
 * @returns string
 */
const textEllipsis = (text: string, take: number) => {
  if (text === undefined || text === null)
    throw new Error("textEllipsis: Text can't be undefined or null");
  if (text.length <= take) return text;
  return text.slice(0, take) + "...";
};

export default textEllipsis;
