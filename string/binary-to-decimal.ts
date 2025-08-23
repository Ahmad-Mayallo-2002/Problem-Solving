function binaryToDecimal(s: string): number {
  let sum: number = 0;
  let pow: number = s.length;
  for (let i: number = 0; i < s.length; i++) sum += +s[i] * 2 ** --pow;
  return sum;
}
