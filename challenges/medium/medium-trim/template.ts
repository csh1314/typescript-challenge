type Space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Space}${infer Rest}` | `${infer Rest}${Space}` ? Trim<Rest> : S
