type FlattenOnce<T extends unknown[]> = 
  T extends [infer First, ...infer Rest]
    ? First extends unknown[]
      ? [...First, ...FlattenOnce<Rest>]
      : [First, ...FlattenOnce<Rest>]
    : T

type FlattenDepth<
  T extends unknown[],
  C extends number = 1, // flatten count
  U extends unknown[] = [] // temp helper array
> =
  T extends FlattenOnce<T>
    ? T
    : C extends U['length']
      ? T
      : FlattenDepth<FlattenOnce<T>, C, [0, ...U]>

// 我们没法直接操作类型中数字的增减
// 这里比较巧妙的点是用了一个辅助数组, 使用spread + ['length']来做数字的增减