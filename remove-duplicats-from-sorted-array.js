function removeDuplicates(nums) {
  let count = 0,
    prev = Infinity,
    index = 0;
  for (const i of nums) {
    if (i !== prev) {
      count++;
      nums[index++] = i;
    }
    prev = i;
  }
  return count;
}

console.log(removeDuplicates([1, 1, 2]));