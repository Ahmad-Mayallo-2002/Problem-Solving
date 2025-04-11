function sortByArea(areasArray) {
  return areasArray.sort(
    (a, b) =>
      (typeof a === "number" ? a ** 2 * 3.14 : a[0] * a[1]) -
      (typeof b === "number" ? b ** 2 * 3.14 : b[0] * b[1])
  );
}

const array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];

console.log(sortByArea(array));
