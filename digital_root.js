function digital_root(n) {
    n = String(n).split("");
    let valueCase;
    for (let i = 0; i < n.length; i++) {
        let value = 0;
        for(let j = 0; j < n.length; j++){
            value += Number(n[j]);
        }
        if(value >= 10){
            let newValue = String(value).split("");
            value = 0;
            for(let k = 0; k < newValue.length; k++){
                value += Number(newValue[k]);
            }
        }
        valueCase = value;
    }
    return valueCase;
}

digital_root(942)