function createPhoneNumber(numbers) {
  let firstValue = numbers.splice(0, 3).join(''),
    secondValue = numbers.splice(0, 3).join(''),
    thirdValue = numbers.splice(0, 4).join('');
  return `(${firstValue}) ${secondValue}-${thirdValue}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
