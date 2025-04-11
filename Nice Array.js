function isNice(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] + 1 || array[i] === array[j] - 1) {
        result++;
        break;
      }
    }
  }
  return result === array.length;
}

console.log(isNice([1, 2, 3, 4]));
