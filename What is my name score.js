const { log } = console;

function nameScore(name) {
  const alphaObject = {
    ABCDE: 1,
    FGHIJ: 2,
    KLMNO: 3,
    PQRST: 4,
    UVWXY: 5,
    Z: 0,
    " ": 0,
  };
  let score = 0;
  for (let i = 0; i < name.length; i++) {
    const regExp = new RegExp(name[i], "gi");
    for (const set in alphaObject)
      if (regExp.test(set)) score += alphaObject[set];
  }
  return { [name]: score };
}

log(nameScore("Mary Jane"));
