function titleToNumber(columnTitle: string): number {
  let sum: number = 0;
  for (const char of columnTitle) {
    sum *= 26;
    sum += char.charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return sum;
}

