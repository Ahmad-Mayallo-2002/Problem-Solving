function convertToTitle(columnNumber: number): string {
  let res: string = "";
  while (columnNumber) {
    columnNumber--;
    res = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
}
