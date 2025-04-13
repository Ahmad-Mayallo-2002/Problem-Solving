function symmetricPoint(p, q) {
  let x = q[0] * 2 - p[0];
  let y = q[1] * 2 - p[1];
  return [x, y];
}

console.log(symmetricPoint([0, 0], [1, 1]));
console.log(symmetricPoint([2, 6], [-2, -6]));
console.log(symmetricPoint([10, -10], [-10, 10]));
console.log(symmetricPoint([1, -35], [-12, 1]));
console.log(symmetricPoint([1000, 15], [-7, -214]));
console.log(symmetricPoint([0, 0], [0, 0]));
