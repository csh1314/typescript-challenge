type TupleToNestedObject<T extends unknown[], U> =
  T extends [infer First extends PropertyKey, ...infer Rest]
    ? {
      [K in First]: TupleToNestedObject<Rest, U>
    }
    : U