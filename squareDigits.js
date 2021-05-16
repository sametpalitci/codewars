function squareDigits(num){
    if(num === String(num)) return Number(num);
    num = String(num).split("");
    let sum = "";
    for (let i = 0; i < num.length; i++){
        sum +=Math.pow(num[i],2)
    }
    return Number(sum);
}

console.log(squareDigits('9414'))