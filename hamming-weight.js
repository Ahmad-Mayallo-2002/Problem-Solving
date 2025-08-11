function hammingWeight(n) {
  let count = 0;
  while (n) {
    if (n % 2 !== 0) count++;
    n = Math.floor(n / 2);
  }
  return count;
}

console.log(hammingWeight(64));
