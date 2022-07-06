function greater(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

let result = greater(12, 32);
console.log("result1", result);

result = greater(34, 32);

console.log("result2", result);
