function summingNumberDigit(num) {
  let numAsString = String(num);
  let counter = 0;
  for (let i = 0; i < numAsString.length; i++) {
    numAsString[i] === "-" && i++;
    counter += +numAsString[i];
  }
  return counter;
}

console.log(summingNumberDigit("-55"));
