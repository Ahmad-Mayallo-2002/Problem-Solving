function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.round((start + end) / 2);
  while (start <= end) {
    mid = Math.round((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) start = mid + 1;
    if (nums[mid] > target) end = mid - 1;
  }
  return nums[start] < target ? start + 1 : start;
}

console.log(searchInsert([1, 3, 5], 4));
