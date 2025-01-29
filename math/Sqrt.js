const mySqrt = (num) => {
  if (num === 0 || num === 1) return num;
  for (let i = 2; i <= num; i++) {
    if (i * i === num) return i;
    if (i * i > num) return i - 1;
  }
};

console.log(mySqrt(4));
// Big-O O(n^0.5)
