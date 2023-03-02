type Flip<T extends Record<PropertyKey, any>> = {
  [K in keyof T as `${T[K]}`]: K
}

// handle boolean or other not be PropertyKey : use `${T[K]}`