type Pop<T extends any[]> = T extends [...infer P, infer Last]
  ? P
  : never