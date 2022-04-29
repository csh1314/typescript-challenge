type DeepReadonly<T> = {
  readonly [K in keyof T] : T[K] extends Record<string, unknown> | any[]
    ? DeepReadonly<T[K]>
    : T[K]
}


// Record<string, unknown> : { [string]: unknown }

// 关于 unknown 和 any 的区别
// 1. unknown 是 any对应的安全类型:
//    任何类型都可以赋值给unknown, 已经赋值类型unknown的值不能赋值给其他类型的变量(除了unknown, any)
// 2. 而 any 可以赋值给任何类型, 任何类型也可以赋值给any
// 3. TypeScript 不允许我们对类型为 unknown 的值执行任意操作
// 4. unknown | any = any,  unknown | 其他类型 = unknown