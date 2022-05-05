type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer P}${infer Rest}`
  ? LengthOfString<Rest, [...T, P]>
  : T['length']


// 我们无法直接通过 S['length'] 得到字符串长度
// 而数组可以这么玩,那就转成数组即可