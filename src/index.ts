export enum DataTypes {
  string = "string",
  number = "number",
  boolean = "boolean",
  null = "null",
  undefined = "undefined",
  symbol = "symbol",
  bigint = "bigint",
  function = "function",
  object = "object",
  array = "array",
  date = "date",
  regexp = "regexp",
}

/**
 *
 * @param value
 * @returns DataTypes
 */
export const typeis = (value: unknown): DataTypes => {
  if (value instanceof RegExp) {
    return DataTypes.regexp;
  }
  if (value instanceof Date) {
    return DataTypes.date;
  }
  if (value instanceof Array) {
    return DataTypes.array;
  }
  if (value === null) {
    return DataTypes.null;
  }
  return typeof value as DataTypes;
};
