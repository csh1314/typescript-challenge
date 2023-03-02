type Fibonacci<
  T extends number, 
  F1 extends unknown[] = [],
  F2 extends unknown[] = [unknown],
  C extends unknown[] = [unknown], // 计数count
> = C['length'] extends T
  ? F2['length']
  : Fibonacci<T, [...F2], [...F1, ...F2], [unknown, ...C]>

// f(n) = f(n-1) + f(n-2), f(0) = 0, f(1) = 1
// step1: a1 = b1 + c1
// step2: c2 = b1; b2 = a1 = (b1 + c1)
// 只需要2个变量 b 和 c 做增量就好