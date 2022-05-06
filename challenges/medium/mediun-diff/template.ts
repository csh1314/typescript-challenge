type Diff<O extends Record<string, unknown>, O1 extends Record<string, unknown>> = {
  [
    K in keyof (O & O1) as K extends keyof O
      ? K extends keyof O1
        ? never
        : K
      : K
  ]: (O & O1)[K]
}

// diff 取两集合不想交集