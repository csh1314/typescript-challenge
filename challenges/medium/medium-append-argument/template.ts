type AppendArgument<Fn extends (...args: any[]) => any, A extends unknown> = Fn extends (...args: [...infer P]) => infer R
  ? (...args: [...P, A]) => R
  : never


// 函数追加参数
// 获取参数的方式 ...args: [...infer P]