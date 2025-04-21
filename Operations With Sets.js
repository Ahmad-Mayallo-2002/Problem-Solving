function process2Arrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const inBoth = arr1.filter((el) => set2.has(el)).length;
  const onlyOne =
    arr1.filter((el) => !set2.has(el)).length +
    arr2.filter((el) => !set1.has(el)).length;
  const remainingInArr1 = arr1.filter((el) => !set2.has(el)).length;
  const remainingInArr2 = arr2.filter((el) => !set1.has(el)).length;

  return [inBoth, onlyOne, remainingInArr1, remainingInArr2];
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [2, 4, 6, 8, 10, 12, 14];

console.log(process2Arrays(arr1, arr2));
