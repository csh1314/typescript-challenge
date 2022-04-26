type MyExclude<T, U> = T extends U ? never : T


// extends 用法
// 1. 继承
// 2. 条件判断 三元运算
//  如果extends前面的类型能够赋值给extends后面的类型
//  那么表达式判断为真，否则为假