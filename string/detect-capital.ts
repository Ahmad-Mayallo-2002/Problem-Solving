function detectCapitalUse(word: string): boolean {
  if (/^[A-Z][a-z]+$/.test(word)) return true;
  if (/^[A-Z]+$/.test(word)) return true;
  if (/^[a-z]+$/.test(word)) return true;
  return false;
}
