function longestCommonPrefix(strs) {
  if (!strs || !strs.length) return "";
  for (let i = 0; i < strs.length; i++) {
    let char = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== char)
        return strs[0].substring(0, i);
    }
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
