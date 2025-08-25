function countSegments(s: string): number {
  const matches = s.match(/\S+/gi);
  return matches ? matches.length : 0;
}

function countSegments2(s: string): number {
  let count: number = 0;
  let isSegment: boolean = false;
  for (const char of s) {
    if (char !== " ") {
      if (!isSegment) {
        count++;
        isSegment = true;
      }
    } else {
      isSegment = false;
    }
  }
  return count;
}
