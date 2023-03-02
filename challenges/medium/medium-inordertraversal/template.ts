interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null> =
  [T] extends [null]
    ? []
    : [
      ...InorderTraversal<T['left']>, 
      T['val'], 
      ...InorderTraversal<T['right']>
    ]

// Why [T] extends [null] but not T extends null ?
// see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// T是一个联合类型时, 使用 T extends type, 会将T的所有类型【分别】做extends type, 返回一个联合类型
// distributive
/**
 * Example
 * type ToArray<Type> = Type extends any ? Type[] : never
 * type a = ToArray<string | number> = string[] | number[]  // not string|number [] !
 */