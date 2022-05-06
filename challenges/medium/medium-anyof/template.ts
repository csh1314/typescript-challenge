type Falsy = 0 | '' | false | [] | null | undefined | Record<string, never>

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends Falsy ? AnyOf<Rest> : true
  : false