function sharePrice(invested, changes) {
  return changes
    .reduce((prev, curr) => prev * (1 + curr / 100), invested)
    .toFixed(2);
}
