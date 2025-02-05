const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const searchInsert = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == array[mid]) return mid;
    if (target < array[mid]) right = mid - 1;
    if (target > array[mid]) left = mid + 1;
  }
  return left;
};

console.log(searchInsert(array, 4));
