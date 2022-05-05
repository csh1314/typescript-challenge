type space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${space}${infer Rest}` ? TrimLeft<Rest> : S

// 字符串同样也可以使用infer来占位 `${}${}`