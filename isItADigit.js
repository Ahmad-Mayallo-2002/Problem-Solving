const digit = (string) => /^[0-9]$/.test(string);
console.log(digit(""));
console.log(digit("1"));
console.log(digit("a"));
console.log(digit("111212"));
