function findMissingLetter(array) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    array[0] === array[0].toUpperCase() ?
        alphabet = alphabet.toUpperCase().split("")
        :
        alphabet = alphabet.split("");
    for (let i = 0; i < array.length; i++)
        if (alphabet[alphabet.indexOf(array[i]) + 1] !== array[i + 1]) return alphabet[alphabet.indexOf(array[i]) + 1]
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
