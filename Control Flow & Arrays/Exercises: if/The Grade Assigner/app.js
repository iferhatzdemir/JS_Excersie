let assignGrade = (score) => {
  let finalScore =
    score > 90
      ? "A"
      : score > 80
      ? "B"
      : score > 70
      ? "C"
      : score > 65
      ? "D"
      : "F";
  return finalScore;
};

let score = Math.random() * 100;
score = Math.floor(score);
console.log(
  `You have ${score} points and that is equal to ${assignGrade(score)}`
);
