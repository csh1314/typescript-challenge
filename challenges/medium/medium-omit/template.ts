type MyOmit<T, K> = {
 [P in keyof T as Exclude<P, K>] : T[P]
}


// Omit ===> 创建一个省略了K中字段的 T 对象
// P in keyof T as Exclude<P, K> ===> 在T中的能给K赋值类型的P