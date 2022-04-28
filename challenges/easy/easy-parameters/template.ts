type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// 函数类型 (...args: any[]) => any
// 传入一个函数, 返回这个函数所有参数的类型