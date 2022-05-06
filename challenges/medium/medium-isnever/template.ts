type IsNever<T> = [T] extends [never] ? true : false

// 1.never可以赋值给任何类型 ===> never是任何类型的父集
// 所以 T extends never === false
// 2.任何类型不能赋值给 never (除了never)

// 因此本题需要借助其他类型来做判断