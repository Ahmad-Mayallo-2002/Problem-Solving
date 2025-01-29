const convertToTitle = (columnNumber) => {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    result =
      String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
// Big-O O(n)
console.log(convertToTitle(701));
