type IsUnion<T, K = T> = T[] extends never[] 
? false 
: T extends T 
  ? [Exclude<K, T>] extends never[]
    ? false 
    : true
  : never