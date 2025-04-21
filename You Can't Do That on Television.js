function bucketOf(str) {
  let hasWater = /(water|wet|wash)/gi.test(str);
  let hasSlime = /(I don't know|slime)/gi.test(str);
  if (hasSlime && hasWater) {
    return "sludge";
  } else if (hasWater) {
    return "water";
  } else if (hasSlime) {
    return "slime";
  } else {
    return "air";
  }
}

console.log(bucketOf("What is that, WATER?!?"));
console.log(bucketOf("I don't know if I'm doing this right."));
console.log(bucketOf("You won't get me!"));
