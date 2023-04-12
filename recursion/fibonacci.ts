let obj = new Map<number, number>();
function rec(i: number): number {
  if (i <= 1) {
    return i;
  }
  let cachedAns = obj.get(i);
  if (cachedAns) {
    return cachedAns;
  } else {
    let ans = rec(i - 1) + rec(i - 2);
    obj.set(i, ans);
    return ans;
  }
}

const a = rec(100);
console.log('ans', a);
