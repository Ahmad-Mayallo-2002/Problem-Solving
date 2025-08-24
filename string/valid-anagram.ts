// Frequency Array Approach
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const freq: number[] = new Array(26).fill(0);
  for (const char of s) freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  for (const char of t) freq[char.charCodeAt(0) - "a".charCodeAt(0)]--;
  for (const count of freq) if (count) return false;
  return true;
}
// Time Complexity O(n + m) / Space Complexity O(1)

// Hash Map Approach
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = {};
  for (const char of s) s[char] = (s[char] || 0) + 1;
  for (const char of t) t[char] = (t[char] || 0) - 1;
  for (const key in map) if (map[key]) return false;
  return true;
}
// Time Complexity O(n + m) / Space Complexity O(1)
