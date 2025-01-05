import { log } from "console";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const searchInsertPosition = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == array[mid]) return `${target} at Index ${mid}`;
    if (target < array[mid]) right = mid - 1;
    if (target > array[mid]) left = mid + 1;
  }
  return `Target is Not Found`;
};

log(searchInsertPosition(array, 4));
