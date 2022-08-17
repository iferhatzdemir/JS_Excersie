// The
let creditCardNum = prompt("Enter your  credit card number");
//let creditCardNum = " 5200 1900275 47880    ";
creditCardNum = creditCardNum.replace(/\s+/g, "");
let evenSum = 0;
let oddSum = 0;
function useRegex(input) {
  let regex =
    /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
  return regex.test(input);
}

let validateCreditCard = (creditCardNum) => {
  if (creditCardNum.length == 16 && useRegex(creditCardNum)) {
    for (let i = 0; i < creditCardNum.length; i++) {
      if (creditCardNum[i] % 2 == 0) {
        evenSum += Number(creditCardNum[i]);
      } else {
        creditCardNumArr = Number(creditCardNum[i]) * 2;
        creditCardNumArr = creditCardNumArr.toString();
        firstchar = creditCardNumArr[0];
        secondchar = creditCardNumArr[1];
        if (secondchar == undefined) {
          secondchar = 0;
        }
        oddSum += Number(firstchar) + Number(secondchar);
      }
    }
    let sum = evenSum + oddSum;
    if (sum % 10 == 0) {
      console.log(`${creditCardNum}`);
      alert(`${creditCardNum} is a valid credit card number`);
    } else {
      alert(`${creditCardNum} is not a valid credit card number`);
    }
    console.log(sum);
  } else {
    alert("Credit Card Number must be 16 digits");
  }
};

validateCreditCard(creditCardNum);
