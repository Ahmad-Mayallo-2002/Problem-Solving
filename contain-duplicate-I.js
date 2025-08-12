function containsDuplicate(nums) {
  // Time Complexity O(n)
  // Space Complexity O(n)
  let set = new Set(nums);
  return set.size !== nums.length;
}

function containsDuplicate2(nums) {
  // Time Complexity O(n logn)
  // Space Complexity O(1)
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === nums[i + 1]) return true;
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
