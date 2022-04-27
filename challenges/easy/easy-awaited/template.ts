type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any> ? MyAwaited<U> : U
  : never


// infer 相当于设了一个类型变量
// 如果Promise<infer U>中U是一个Promise, 向下递归解包, 否则直接返回U