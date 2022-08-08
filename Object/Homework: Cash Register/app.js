var cartForParty = {
  banana: "1.25",
  handkerchief: "0.99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

console.log(Object.values(cartForParty));

function getTotal(cart) {
  let totalPrice = 0;
  for (values in cart) {
    totalPrice += parseFloat(cart[values]);
  }

  return totalPrice;
}

//cashRegister(cartForParty);

console.log(`Total price is ${getTotal(cartForParty)}`);
