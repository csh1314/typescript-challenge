type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// type First<T extends any[]> = T extends [infer U, ...any] ? U : never

