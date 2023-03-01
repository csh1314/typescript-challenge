type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

// -readonly 去掉readonly