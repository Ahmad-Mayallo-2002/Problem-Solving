function lengthOfLastWord(s: string): number {
  let counter: number = 0;
  for (let i: number = s.length - 1; i >= 0; i--) {
    if (/[a-zA-Z]/.test(s[i])) counter++;
    if (s[i - 1] === " " && /[a-zA-Z]/.test(s[i])) break;
  }
  return counter;
}

