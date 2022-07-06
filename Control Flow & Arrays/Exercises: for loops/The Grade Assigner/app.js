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

for (var i = 0; i <= 100; i++) {
  console.log(`For ${i}  you got a ${assignGrade(i)}`);
}
