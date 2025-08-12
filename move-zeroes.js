function moveZeroes(nums) {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
