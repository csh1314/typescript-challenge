type ReplaceKeys<U, T, Y> = {
  [K in keyof U] :
    K extends T
      ? K extends keyof Y
        ? Y[K]
        : never
      : U[K]
}

// replace keys
// 相同的key替换, Y => T => U
  