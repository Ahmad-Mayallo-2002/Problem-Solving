const calculator = (a, b, sign) => {
  let map = {
    "+": a + b,
    "/": a / b,
    "*": a * b,
    "-": a - b,
  };
  return map[sign] ? map[sign] : "unknown value";
};
console.log(calculator(-1, -1, "+"));
