function removeElement(nums, val) {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < nums.length) {
    delete nums[slow];
    slow++;
  }
  let count = 0;
  for (const i of nums) if (!isNaN(i)) count++;
  return count;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
