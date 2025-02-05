const gcd = (num1, num2) => {
  const result = num1 === 0 ? num2 : gcd(num2 % num1, num1);
  return result;
};
const findGCD = (nums) => {
  let min = nums[1];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
    if (max < nums[i]) max = nums[i];
  }
  let result = gcd(min, max);
  return result;
};
console.log(findGCD([10, 7]));
