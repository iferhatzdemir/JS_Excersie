let plurazier = (noun, piece) => {
  let Plurazier =
    piece > 1 && noun != "sheep" && noun != "geese"
      ? piece + " " + noun + "s"
      : `${piece}  ${noun}`;
  return Plurazier;
};
console.log(plurazier("dog", 2));
