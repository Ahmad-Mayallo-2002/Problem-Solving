function counterOccurence(string) {
  let object = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    object[char] = (object[char] || 0) + 1;
  }
  let values = Object.values(object);
  for (let i = 0; i < values.length; i++)
    if (values[i + 1]) if (values[i] !== values[i + 1]) return false;
  return true;
}

console.log(counterOccurence("abacbc"));
