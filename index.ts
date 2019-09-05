import fresh from "@unction/fresh";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeDeepRight from "@unction/mergedeepright";
import objectFrom from "@unction/objectfrom";
import split from "@unction/split";
import {RecordType} from "./types";
import {TextType} from "./types";

export default function inflateTree<A, B, C> (delimiter: TextType) {
  return function inflateTreeDelimiter (record: RecordType<A, B>): RecordType<A, C> {
    return reduceWithValueKey(
      (accumulated: RecordType<A, B | C>) =>
        (value: B | C) =>
          (key: A) =>
            mergeDeepRight(
              objectFrom(
                split(delimiter)(key)
              )(value)
            )(accumulated)
    )(
      fresh(record)
    )(
      record
    );
  };
}
