type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}


// 给对象添加属性
// P in keyof T | U