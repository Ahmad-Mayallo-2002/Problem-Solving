function maxProfit(prices) {
  let maxP = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let curr = prices[r] - prices[l];
      maxP = Math.max(curr, maxP);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
}
console.log(maxProfit([1, 4, 2]));
