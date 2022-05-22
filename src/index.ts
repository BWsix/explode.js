/**
 * Returns an array of strings, each of which is a substring of string formed by splitting it on boundaries formed by the string separator.
 *
 * @param separator The boundary string.
 * - If separator is an empty string (""), explode() throws a ValueError.
 * - If separator contains a value that is not contained in string and a negative limit is used, then an empty array will be returned, otherwise an array containing string will be returned.
 * - If separator values appear at the start or end of string, said values will be added as an empty array value either in the first or last position of the returned array respectively.
 * @param string The input string.
 * @param limit An integer
 * - If limit is set and positive, the returned array will contain a maximum of limit elements with the last element containing the rest of string.
 * - If limit is negative, all components except the last -limit are returned.
 * - If limit is zero, then this is treated as 1.
 * @returns An array of strings created by splitting the string parameter on boundaries formed by the separator.
 */
export const explode = (
  separator: string,
  string: string,
  limit?: number
): string[] => {
  if (separator === '')
    throw new ValueError('Separator can not be empty string');

  const result = string.split(separator);

  if (limit === undefined) {
    return result;
  } else if (limit >= result.length) {
    return result;
  } else if (limit > 0) {
    const take = limit - 1;
    return [...result.slice(0, take), result.slice(take).join(separator)];
  } else if (limit === 0) {
    return [string];
  } else {
    // limit is negative
    if (-limit >= result.length) return [];
    return result.slice(0, result.length + limit);
  }
};

export class ValueError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ValueError.prototype);
  }
}
