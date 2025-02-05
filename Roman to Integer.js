const romanToInt = (number) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    let prev = roman[number[i]];
    let next = roman[number[i + 1]];
    if (prev < next) {
      result += next - prev;
      i++;
    } else {
      result += prev;
    }
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));
