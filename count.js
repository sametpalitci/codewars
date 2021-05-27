function count(string) {
  string = string.split("");
  let inclusive = {};
  string.map(value => inclusive[value] = (Number(inclusive[value]) | 0) + 1);
  return inclusive;
}

count("aba");
