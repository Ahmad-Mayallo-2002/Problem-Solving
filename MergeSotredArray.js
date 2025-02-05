let array1 = [4, 5, 6, 0, 0, 0];
const m = 3;
let array2 = [2, 4, 5, 6, 7];
const n = 5;

function merge(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];
    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
    } else {
      nums1[i] = sVal;
      second--;
    }
    i--;
  }
}

merge(array1, m, array2, n);
console.log(array1);
