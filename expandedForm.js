function expandedForm(num) {
    num = num.toString();
    let result = "";
    let firstCheck = false;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 10 !== 0) {
            let newValue = Number(num[i]) * Math.pow(10, (num.length - 1 - i));
            if(firstCheck){
                result += ` + ${newValue}`
            } else {
                result += `${newValue}`
                firstCheck = true;
            }
        }
    }
    return result;
}

console.log(expandedForm(70304))