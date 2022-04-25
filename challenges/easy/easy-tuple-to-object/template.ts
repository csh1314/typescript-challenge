type TupleToObject<T extends readonly any[]> = {
  [K in T[number]] : K
}

// 元组转对象
// 遍历数组:  K in T[number]