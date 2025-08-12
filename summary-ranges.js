function summaryRanges(nums) {
  let result = [];
  let start = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      let end = nums[i - 1];
      result.push(`${start}${start !== end ? `->${end}` : ""}`);
      start = nums[i];
    }
  }
  let end = nums[nums.length - 1];
  result.push(`${start}${start !== end ? `->${end}` : ""}`);
  return result;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7, 8]));
