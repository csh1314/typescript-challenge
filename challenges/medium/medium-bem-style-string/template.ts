type BEM<B extends string, E extends string[], M extends string[]> =
  E extends []
    ? `${B}--${M[number]}`
    : M extends []
      ? `${B}__${E[number]}`
      : `${B}__${E[number]}--${M[number]}`

// A extends string|number|bigint|boolean []

// type A<T extends string[]> = T[number]
// type test1 = A<['a','b','c']> = 'a' | 'b' | 'c'