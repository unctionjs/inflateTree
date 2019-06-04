import fresh from "@unction/fresh";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeDeepRight from "@unction/mergedeepright";
import objectFrom from "@unction/objectfrom";
import split from "@unction/split";

export default function inflateTree (delimiter) {
  return function inflateTreeDelimiter (record) {
    return reduceWithValueKey((accumulated) => (value) => (key) => mergeDeepRight(objectFrom(split(delimiter)(key))(value))(accumulated))(fresh(record))(record);
  };
}
