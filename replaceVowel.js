const replaceVowel = (string) => string.replaceAll(/[aeiouAEIOU]/gi, "!");

console.log(replaceVowel("Hi!"), "H!!");
console.log(replaceVowel("!Hi! Hi!"), "!H!! H!!");
console.log(replaceVowel("aeiou"), "!!!!!");
console.log(replaceVowel("ABCDE"), "!BCD!");
