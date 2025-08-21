function isValid(s: string): boolean {
  let stack: string[] = [];
  let characters = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (const char of s) {
    if (!characters[char]) stack.push(char);
    else if (stack.pop() !== characters[char]) return false;
  }
  return !stack.length;
}
