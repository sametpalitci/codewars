function isValidIP(str) {
  str = str.split(".");
  if (str.length == "" || str.length !== 4) return false;
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= 0 && str[i] <= 255) || str[i] != String(Number(str[i])))
      return false;
  }
  return true;
}
console.log(isValidIP("136.189.40"));
