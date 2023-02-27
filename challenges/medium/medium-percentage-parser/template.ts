type PercentageParser<A extends string> = 
  A extends `${infer First}${infer Rest}`
    ? First extends '+' | '-'
      ? A extends `${infer First}${infer Middle}%`
        ? [First, Middle, '%']
        : [First, Rest, '']
      : A extends `${infer First}%`
        ? ['', First, '%']
        : ['', A, '']
    : A extends `%`
      ? ['', '', '%']
      : ['', A, '']

// for string => `${infer A}${infer B}xxx`