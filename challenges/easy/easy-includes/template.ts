import { Equal } from "@type-challenges/utils";

type ToBooleanArray<T extends readonly any[], U> = {
  [key in keyof T]: Equal<T[key], U> extends true ? true : false
}

type Includes<T extends readonly any[], U> = boolean extends ToBooleanArray<T, U>[number] ? true : false
