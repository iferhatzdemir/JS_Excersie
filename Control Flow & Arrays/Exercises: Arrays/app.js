let choices = ["red", "orange", "pink", "yellow", "brown"];
for (var i = 0; i < choices.length; i++) {
  console.log(`My #${i + 1}  choice is  ${choices > [i]}`);

}

for (let i = 0; i < choices.length; i++) {
  let choicenum = i + 1;
  let choiceNumSuffix =
    choicenum == 1
      ? "st"
      : choicenum == 2
      ? "nd"
      : choicenum == 3
      ? "rd"
      : "th";
  console.log(`My ${choicenum}${choiceNumSuffix} choice is   ${choices[i]}`);
}
