function missingNumber(nums) {
  // Time Complexity O(n)
  // Space Complexity O(1)
  let n = nums.length;
  let sumExpected = (n * (n + 1)) / 2;
  let sumActual = 0;
  for (const num of nums) sumActual += num;
  return sumExpected - sumActual;
}
