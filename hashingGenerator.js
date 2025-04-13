function hashingGenerator(string) {
  if (string.length === 0) return false;
  let result = "#" + string.replaceAll(" ", "");
  return result.length > 140 ? false : result;
}

console.log(hashingGenerator("Do We have A Hashtag"));
