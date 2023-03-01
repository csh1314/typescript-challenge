type RequiredByKeys<T, U extends keyof T = keyof T> =
  MergeType<
    Required<Pick<T, U>>
    &
    Omit<T, U>
  >