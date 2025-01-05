const { log } = console;
const plusOne = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < 9) {
      array[i] += 1;
      return array;
    }
    array[i + 1] = 0;
  }
  array[0] = 1;
  return array;
};
const array = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
log(plusOne(array));
