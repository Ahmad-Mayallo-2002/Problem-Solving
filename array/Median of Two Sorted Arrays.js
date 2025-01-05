const { log } = require("console");
class ArrayMergeMedian {
  constructor(arrayOne, arrayTwo) {
    this.arrayOne = arrayOne;
    this.arrayTwo = arrayTwo;
    this.mergedArray = [...this.arrayOne, ...this.arrayTwo];
  }
  bubbleSort() {
    let i = 0;
    while (i < this.mergedArray.length) {
      if (this.mergedArray[i] > this.mergedArray[i + 1]) {
        [this.mergedArray[i], this.mergedArray[i + 1]] = [
          this.mergedArray[i + 1],
          this.mergedArray[i],
        ];
        return this.bubbleSort();
      }
      i++;
    }
  }
  medianElement() {
    if (this.mergedArray.length % 2 == 0) {
      const medIndex = this.mergedArray.length / 2;
      return (this.mergedArray[medIndex - 1] + this.mergedArray[medIndex]) / 2;
    } else {
      const medIndex = Math.floor(this.mergedArray.length / 2);
      return this.mergedArray[medIndex];
    }
  }
}

const newArray = new ArrayMergeMedian([5, 4, 3, 2, 1], [10, 9, 8, 7, 6, 11]);

newArray.bubbleSort();
log(newArray.medianElement());
log(newArray.mergedArray);
