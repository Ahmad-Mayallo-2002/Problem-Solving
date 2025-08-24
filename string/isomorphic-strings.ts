function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const m1 = {};
  const m2 = {};
  for (let i: number = 0; i < s.length; i++) {
    if (!(s[i] in m1)) m1[s[i]] = i;
    if (!(t[i] in m2)) m2[t[i]] = i;
    if (m1[s[i]] !== m2[t[i]]) return false;
  }
  return true;
}

// The idea is based on the fact that all occurrences of two characters should
// be at same index. We mainly store the first index of every character and for
// remaining occurrences, we check if they appear at same first index too.

// We mainly use two maps m1 and m2 to store characters as keys and their first
// indexes as values.

// If this character is seen first time in s1, then store is index in map m1.
// If this character is seen first time in s2, then store is index in map m2.
// If indexes in map for both the characters do not match, return false.
