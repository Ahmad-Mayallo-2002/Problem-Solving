const isPalindrome = (number) => {
  let temp = String(number);
  let reversed = "";
  for (let i = temp.length - 1; i >= 0; i--) reversed += temp[i];
  const result = temp === reversed ? true : false;
  return result;
};

console.log(isPalindrome(-121));
