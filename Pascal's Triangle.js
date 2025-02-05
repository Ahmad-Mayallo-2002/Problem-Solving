// Part 1
const generate = (numRows) => {
  if (numRows <= 0) return [];
  let rowsArray = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    let prevRow = rowsArray[i - 1];
    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    rowsArray.push(row);
  }
  return rowsArray;
};
// console.log(generate(4));
// Big-O O(n^2)

// Part 2
const getRow = (rowIndex) => {
  let rowValues = [1];
  for (let i = 1; i <= rowIndex; i++)
    rowValues.push((rowValues[i - 1] * (rowIndex - i + 1)) / i);
  return rowValues;
};

console.log(getRow(2));
