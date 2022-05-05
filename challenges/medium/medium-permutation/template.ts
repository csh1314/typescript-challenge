type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : []


// 联合类型 => 元组全排列


// 全排列
function permute(nums: number[]): number[][] {
  const ret = []
  dfs(0, [])
  return ret
  function dfs(len: number, path: number[], visited: Set<number> = new Set()) {
    if(len === nums.length) {
      ret.push(path)
      return
    }
    for(let i = 0; i<nums.length; i++) {
      if(!visited.has(i)) {
        visited.add(i)
        dfs(len+1, [...path, nums[i]], visited)
        visited.delete(i)
      }
    }
  }
}