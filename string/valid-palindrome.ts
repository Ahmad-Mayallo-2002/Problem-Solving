function isPalindrome(s: string): boolean {
  let str: string = "";
  for (const char of s)
    if (/^[A-Za-z0-9]$/.test(char)) str += char.toLowerCase();
  let revStr: string = "";
  for (let i: number = str.length - 1; i >= 0; i--) revStr += str[i];
  return str === revStr;
}
