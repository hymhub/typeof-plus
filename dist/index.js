export var DataTypes;
(function (DataTypes) {
    DataTypes["string"] = "string";
    DataTypes["number"] = "number";
    DataTypes["boolean"] = "boolean";
    DataTypes["null"] = "null";
    DataTypes["undefined"] = "undefined";
    DataTypes["symbol"] = "symbol";
    DataTypes["bigint"] = "bigint";
    DataTypes["function"] = "function";
    DataTypes["object"] = "object";
    DataTypes["array"] = "array";
    DataTypes["date"] = "date";
    DataTypes["regexp"] = "regexp";
})(DataTypes || (DataTypes = {}));
/**
 *
 * @param value
 * @returns DataTypes
 */
export const typeis = (value) => {
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
    return typeof value;
};
