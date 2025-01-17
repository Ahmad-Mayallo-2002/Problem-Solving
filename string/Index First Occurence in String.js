function strStr(haystack, needle) {
  let letterCount = 0;
  let indexEntry = 0;
  for (let i = 0; i < haystack.length; i++) {
    indexEntry = i;
    for (let j = i; j < haystack.length; j++) {
      if (needle[letterCount] === haystack[j]) {
        letterCount++;
      } else {
        break;
      }
      if (needle.length === letterCount) return indexEntry;
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad"));
