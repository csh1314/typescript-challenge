type notNull<G> = G extends null | undefined ? never : G

type If<C extends boolean, T, F> = C extends true ? T : F


