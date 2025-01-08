const isThree = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i++) if (num % i === 0) counter++;
  const result = counter === 3 ? true : false;
  return result;
};

console.log(isThree(4));
