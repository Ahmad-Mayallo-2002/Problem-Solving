const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
function reflectingLight(max_x, max_y) {
  const lcm = gcd(max_x, max_y);
  const x_coordinate = lcm / max_x;
  const y_coordinate = lcm / max_y;
  return x_coordinate === y_coordinate ? true : false;
}
console.log(reflectingLight(100, 200));
