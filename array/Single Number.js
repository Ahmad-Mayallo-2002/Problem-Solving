const singleNumber = (nums) => {
  const numbersObject = {};
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    numbersObject[number] = (numbersObject[number] || 0) + 1;
  }
  for (let i in numbersObject) if (numbersObject[i] === 1) return Number(i);
};

console.log(singleNumber([1, 1, 1, 2, 2, 2, 4]));
