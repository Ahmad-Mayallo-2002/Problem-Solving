// Using Character Sum (XOR)
function findTheDifference(s: string, t: string): string {
  let res: number = 0;
  for (const char of s) res ^= char.charCodeAt(0);
  for (const char of t) res ^= char.charCodeAt(0);
  return String.fromCharCode(res);
}

// Using Hash Map
function findTheDifference2(s: string, t: string): string {
  const m = {};
  for (const char of s) m[char] = (m[char] || 0) + 1;
  for (const char of s) {
    if (!m[char]) return char;
    m[char]--;
  }
  return "";
}

BigInt('')