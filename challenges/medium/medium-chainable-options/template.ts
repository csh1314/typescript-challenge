type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & {
    [P in K]: V 
  }>
  get(): T
}



// 可串联类型构造器: 链式调用option添加属性类型, get()取到类型