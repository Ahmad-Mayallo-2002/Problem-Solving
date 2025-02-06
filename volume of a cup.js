function cupVolume(d1, d2, height) {
  let volume =
    (1 / 3) *
    Math.PI *
    height *
    ((d1 / 2) ** 2 + (d1 / 2) * (d2 / 2) + (d2 / 2) ** 2);
  return Number(volume.toFixed(2));
}
console.log(cupVolume(1, 1, 1));
console.log(cupVolume(10, 8, 10));
console.log(cupVolume(1000, 1000, 1000));
console.log(cupVolume(13.123, 123.12, 1));
console.log(cupVolume(5, 12, 31));
