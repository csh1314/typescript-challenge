// type TupleToObject<T extends readonly (keyof any)[]> = {
//   [K in T[number]] : K
// }

// 元组转对象
// 遍历数组:  K in T[number]
// 此题需要注意 TupleToObject<[[1, 2], {}]> 抛出错误
// 因此需要限定数组中的每个元素的类型

// 内置类型 type PropertyKey = string | number | symbol  (限定为非引用类型)

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]] : K
}