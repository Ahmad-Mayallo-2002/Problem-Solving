function areOccurrencesEqual(string) {
  let object = {};
  for (let i = 0; i < string.length; i++)
    object[string[i]] = (object[string[i]] || 0) + 1;
  for (const char in object) if (object[char] > 1) return true;
  return false;
}
console.log(areOccurrencesEqual("abcdefb"));
