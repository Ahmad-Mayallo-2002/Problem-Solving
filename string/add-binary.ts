function addBinary(a: string, b: string): string {
  let sum: number | bigint = 0;
  sum =
    a.length < 53 && b.length < 53
      ? parseInt(a, 2) + parseInt(b, 2)
      : BigInt("0b" + a) + BigInt("0b" + b);
  return sum.toString(2);
}
