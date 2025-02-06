const vaporcode = (string) =>
  string.toUpperCase().replaceAll(" ", "").split("").join("  ");
