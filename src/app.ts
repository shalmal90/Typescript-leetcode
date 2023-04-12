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

let a = rec(10);
console.log('ans', a);
