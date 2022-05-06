type FirstLowerCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? T
    : `${Lowercase<First>}${Rest}`
  : T

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends FirstLowerCase<Rest>
    ? `${Lowercase<First>}${KebabCase<Rest>}`
    : `${Lowercase<First>}-${KebabCase<FirstLowerCase<Rest>>}`
  : S


// FirstLowerCase ===> T是以小写字母开头的