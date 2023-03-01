type FlipArguments<T extends (...args: unknown[]) => unknown> = 
  T extends (...args: infer ArgsType) => infer ReturnType
    ? (...args: Reverse<ArgsType>) => ReturnType
    : never
