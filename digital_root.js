function digital_root(n) {
    function recursive (val) {
        val = String(val).split("");
        let valueCase = 0;
        for(let i = 0; i < val.length; i++){
            valueCase += Number(val[i]);
        }
        if(valueCase >= 10){
            return recursive(valueCase);
        } else {
            return valueCase;
        }
    }
    return(recursive(n));
}

digital_root(456)