function validateCreditCard(ccNumberNoDashes) {

    //Remove dashes from creditCardNum string
    var ccNumberNoDashes = '';
    for (var i = 0; i < creditCardNum.length; i++) {
        if (creditCardNum[i] !== '-') {
            ccNumberNoDashes += creditCardNum[i];
        }
    }

    // The credit card number must be 16 digits in length
    if (ccNumberNoDashes.length !== 16) {
        return false;
    }

    // All of the digits must be numbers
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        // store the current digit
        var currentNumber = ccNumberNoDashes[i];

        // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
        currentNumber = Number.parseInt(currentNumber);

        // check that the digit is a number
        if (!Number.isInteger(currentNumber)) {
            return false;
        }
    }

    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    var obj = {};
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        obj[ccNumberNoDashes[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }

    // The final digit of the credit card number must be even
    if (ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0) {
        return false;
    }

    // The sum of all the digits must be greater than 16
    var sum = 0;
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        sum += Number(ccNumberNoDashes[i]);
    }
    if (sum <= 16) {
        return false;
    }

    return true;
};

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //true
console.log(validateCreditCard('6666-6666-6666-1666')); //true
console.log(validateCreditCard('a923-3211-9c01-1112')); //false
console.log(validateCreditCard('4444-4444-4444-4444')); //false
console.log(validateCreditCard('1211-1111-1111-1112')); //true