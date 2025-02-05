const { log } = require("console");

class Container {
  constructor(heights) {
    this.heights = heights;
  }
  calcArea() {
    let maxArea = 0;
    for (let i = 0; i < this.heights.length; i++) {
      for (let j = 1; j < this.heights.length; j++) {
        const distance = Math.abs(j - i);
        const area = Math.min(this.heights[i], this.heights[j]) * distance;
        maxArea = Math.max(maxArea, area);
      }
    }
    return maxArea;
  }
}

const newContainer = new Container([1, 8, 6, 2, 5, 4, 8, 3, 7]);

log(newContainer.calcArea());
