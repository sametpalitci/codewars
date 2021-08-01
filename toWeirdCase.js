function toWeirdCase(string) {
    string = string.split(" ");
    let newArray = [];
    for (let i = 0; i < string.length; i++) {
        let newString = "";
        for (let j = 0; j < string[i].length; j++) {
            j % 2 === 0 ? newString += string[i][j].toUpperCase() : newString += string[i][j];
        }
        newArray.push(newString);
    }
    return newArray.join(" ")
}

console.log(toWeirdCase("This is a test")); 