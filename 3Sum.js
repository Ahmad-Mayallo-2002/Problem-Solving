import { log } from "console";

class ThreeSum {
  constructor(nums) {
    this.nums = nums;
    this.result = [];
  }
  bubbleSort() {
    for (let i = 0; i < this.nums.length; i++) {
      for (let j = 0; j < this.nums.length; j++) {
        if (this.nums[j] > this.nums[j + 1])
          [this.nums[j], this.nums[j + 1]] = [this.nums[j + 1], this.nums[j]];
      }
    }
  }
  sum() {
    let left = 0;
    let right = this.nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
      let calc = this.nums[left] + this.nums[right] + this.nums[mid];
      if (calc === 0) {
        this.result.push([this.nums[left], this.nums[right], this.nums[mid]]);
        left++;
        right--;
      }
      if (calc < 0) left++;
      if (calc > 0) right--;
    }
  }
}

const newThreeSum = new ThreeSum([-1, 0, 1, 2, -1, -4]);
newThreeSum.bubbleSort();
newThreeSum.sum();
log(newThreeSum.nums);
log(newThreeSum.result);
