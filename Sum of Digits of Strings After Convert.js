function getLucky(s, k) {
  const alphabetValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let string = "";
  let number = 0;
  for (let i = 0; i < s.length; i++) string += alphabetValues[s[i]];
  while (k > 0) {
    for (let i = 0; i < string.length; i++) number += Number(string[i]);
    if (k > 1) {
      string = String(number);
      number = 0;
    }
    k--;
  }
  return number;
}

console.log(getLucky("zbax", 2));
