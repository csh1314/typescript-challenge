type Replace<S extends string, From extends string, To extends string> = S extends `${infer Head}${From}${infer Tail}`
  ? `${Head}${From extends '' ? '' : To}${Tail}`
  : S