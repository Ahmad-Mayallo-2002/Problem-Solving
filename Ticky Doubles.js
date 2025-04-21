function trickyDoubles(n) {
  let str = String(n);
  let halfOne = str.slice(0, str.length / 2);
  let halfTwo = str.slice(str.length / 2);
  return halfOne === halfTwo ? n : n * 2;
}

console.log(trickyDoubles(15));
console.log(trickyDoubles(100));
console.log(trickyDoubles(4343));
console.log(trickyDoubles(1111));
