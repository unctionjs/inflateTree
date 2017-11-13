import fresh from "@unction/fresh"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import mergeDeepRight from "@unction/mergedeepright"
import recordFrom from "@unction/recordfrom"
import split from "@unction/split"

export default function inflateTree (delimiter: StringType): UnaryFunctionType {
  return function inflateTreeDelimiter (record: RecordType): NestedRecordType {
    return reduceWithValueKey(
      (accumulated: RecordType | NestedRecordType): UnaryFunctionType =>
        (value: mixed): UnaryFunctionType =>
          (key: KeyType): NestedRecordType =>
            mergeDeepRight(recordFrom(split(delimiter)(key))(value))(accumulated)
    )(
      fresh(record)
    )(
      record
    )
  }
}
