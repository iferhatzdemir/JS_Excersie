let birthYear = 1997;
let futureYear = 1996;
function CalculateYear(birthYear, futureYear) {
  return futureYear - birthYear;
}
if (futureYear > birthYear) {
  let year = CalculateYear(birthYear, futureYear);
  console.log(
    `If you were born in ${birthYear}, then in ${futureYear} you'll be either ${year} or ${
      year - 1
    }, depending on what month it is in ${futureYear}.`
  );
} else {
  console.log(
    "Sorry, I couldn't calculated, because you were not born on that date "
  );
}
