export declare enum DataTypes {
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
    regexp = "regexp"
}
/**
 *
 * @param value
 * @returns DataTypes
 */
export declare const typeis: (value: unknown) => DataTypes;
