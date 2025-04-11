function polydvisibleNumber(number) {
  let numAsString = String(number);
  for (let i = 0; i < numAsString.length; i++) {
    let num = +numAsString.slice(0, i);
    if (/\d\.\d/.test(`${num}`)) return false;
  }
  return true;
}

console.log(polydvisibleNumber(1232));
