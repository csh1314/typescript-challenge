type MyOmit<T, K extends keyof T> = {
 [P in Exclude<keyof T, K>] : T[P]
}


// Omit ===> 创建一个省略了K中字段的 T 对象
// P in Exclude<keyof T, K> ===> 在T中的能给K赋值类型的P