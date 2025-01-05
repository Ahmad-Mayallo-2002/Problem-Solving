import { log } from "console";

// If Array is Sorted
const array = [
  1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5,
];

const removeDuplicated = (array) => {
  for (let i = 0; i < array.length; i++)
    if (array[i] == array[i + 1]) delete array[i];
};

removeDuplicated(array);
log(array);

// If Array is not Sorted
const arrayTwo = [
  1, 3, 2, 1, 3, 2, 1, 2, 4, 5, 3, 7, 7, 7, 0, 3, 8, 8, 9, 1, 1, 0, 9, 8, 4, 3,
  4, 6, 6, 11, 11,
];

const removeDuplicatedUnsorted = (array) => {
  for (let i = 0; i < array.length; i++)
    for (let j = i + 1; j < array.length; j++)
      if (array[i] == array[j]) delete array[j];
};

removeDuplicatedUnsorted(arrayTwo);

log(arrayTwo);
