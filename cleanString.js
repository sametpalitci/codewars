function cleanString(s) {
  let lastValue = [];
  s.split("").map((sVal)=>sVal === "#" ? lastValue.pop():lastValue.push(sVal));
  return lastValue.join("")
};

console.log(cleanString("abc#d##c"));