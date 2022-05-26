


defaultdogage=7;

function calculateDogAge(humanage){
humanageTodogAge=humanage*defaultdogage;
console.log(`Your doggie is ${humanageTodogAge} years old in dog years!`);
}
calculateDogAge(4);
calculateDogAge(20);
calculateDogAge(54);

function convetDogAgetoHumanAge(dogAge){
dogAgetohumanage=Math.floor(dogAge/defaultdogage);
console.log(`Your doggie is ${dogAgetohumanage} years old in Human years!`);
}
convetDogAgetoHumanAge(700);
convetDogAgetoHumanAge(49);
convetDogAgetoHumanAge(21);
convetDogAgetoHumanAge(25);
