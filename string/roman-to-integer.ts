function romanToInt(s: string): number {
  let roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum: number = 0;
  let prev: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    let curr: number = roman[s[i]];
    sum += curr > prev ? curr - 2 * prev : curr;
    prev = curr;
  }
  return sum;
}
