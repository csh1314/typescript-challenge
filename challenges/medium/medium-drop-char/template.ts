type DropChar<S, C> = 
  S extends `${infer First}${infer Rest}`
    ? First extends C
      ? DropChar<Rest, C>
      : `${First}${DropChar<Rest, C>}`
    : S extends C
      ? ''
      : S

// 用infer+递归来实现string的遍历