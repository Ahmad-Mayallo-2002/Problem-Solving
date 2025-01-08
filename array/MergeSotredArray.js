const array1 = [1, 2, 3, 4];
const m = 4;
const array2 = [2, 4, 5, 6, 7];
const n = 5;

function swap(prev, next, array) {
  let temp = array[prev];
  array[prev] = array[next];
  array[next] = temp;
}

function merge(nums1, m, nums2, n) {
  if (n === 1) {
    nums1[m] = nums2[0];
    if (nums1[m - 1] > nums1[m]) swap(m - 1, m, nums1);
  } else if (!n) {
    nums1 = nums1;
  } else {
    let j = n - 1;
    for (let i = m + n - 1; i > 0; i--) {
      if (j >= 0) {
        nums1[i] = nums2[j];
        j--;
      }
      if (nums1[i - 1] > nums1[i]) swap(i - 1, i, nums1);
    }
  }
}

merge(array1, m, array2, n);

console.log(array1);
