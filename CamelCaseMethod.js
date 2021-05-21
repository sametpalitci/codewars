String.prototype.camelCase = function () {
  let val = this.toString().split(" ");
  for (let index = 0; index < val.length; index++) {
    if (val[index] !== "") {
      val[index] =
        val[index][0].toUpperCase() +
        val[index].substring(1, val[index].length);
    }
  }
  return val.join("");
};

console.log(" camel case word".camelCase());
