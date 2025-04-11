function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[start] + nums[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [start, end];
    }
  }
  return { start, end };
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 9;
console.log(twoSum(array, target));
