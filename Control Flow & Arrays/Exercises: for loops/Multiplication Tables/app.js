let multiplication = 9;

for (var i = 0; i < 10; i++) {
  let result = i * multiplication;
  console.log(`${multiplication}  * ${i}  =  ${result}`);
}

console.log("----------------------------------------------------");
for (multiplication = 0; multiplication <= 10; multiplication++) {
  for (var i = 0; i <= 10; i++) {
    var result = multiplication * i;
    console.log(`${multiplication}  * ${i}  =  ${result}`);
  }
}
