type PartialByKeys<T, U extends keyof T = keyof T> = 
  MergeType<
    Partial<Pick<T, U>>
    &
    Omit<T, U>
  >

type MergeType<T> = {
  [K in keyof T]: T[K]
}

type test = MergeType<{a: number, b:string} & {c?: number}>