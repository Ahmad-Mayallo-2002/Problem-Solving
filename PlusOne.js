const { log } = console;
const plusOne = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < 9) {
      array[i] += 1;
      return array;
    } else {
      array[i] = 0;
    }
  }
  if (!array[0]) array.unshift(1);
  return array;
};
const array = [9];
log(plusOne(array));
