function containsNearbyDuplicate(nums, k) {
  // Time Complexity O(n)
  // Space Complexity O(n)
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) if (Math.abs(i - map.get(nums[i])) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
