const integrate = (coefficient, exponent) =>
  `${coefficient / (exponent + 1)}x^${exponent + 1}`;
console.log(integrate(3, 2));
