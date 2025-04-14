function betterThanAverage(classPoints, yourPoints) {
  let temp = 0;
  for (const point of classPoints) temp += point;
  const avg = temp / classPoints.length;
  return yourPoints > avg;
}
