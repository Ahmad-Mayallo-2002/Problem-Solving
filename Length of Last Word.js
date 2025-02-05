// const lengthOfLastWord = (s) => {
//   let test = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//       continue;
//     } else {
//       test.push(s[i]);
//       if (s[i - 1] === " ") break;
//     }
//   }
//   return test.length;
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n == 1) return [1];
  for (let i = 1; i <= n - 3; i++)
    signature.push(signature[i] + signature[i - 1] + signature[i + 1]);
  return signature;
}

console.log(tribonacci([0, 0, 1], 10));
