function majorityElement(nums) {
  let candidate = 0;
  let vote = 0;
  for (const num of nums) {
    if (!vote) candidate = num;
    vote += candidate === num ? +1 : -1;
  }
  return candidate;
}

console.log(majorityElement([3, 2, 3]));
