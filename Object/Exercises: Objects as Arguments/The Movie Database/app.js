let movieList = [];

let movieListAdd = (title, duration, stars) => {
  return {
    title: title,
    duration: duration,
    stars: stars,
  };
};

let addMovie = movieListAdd("The Shawshank Redemption", "2h 22min", [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton",
]);

movieList.push(addMovie);

addMovie = movieListAdd("The Godfather", "2h 55min", [
  "Marlon Brando",
  "Al Pacino",
  "James Caan",
]);
movieList.push(addMovie);
console.log("addMovie", addMovie);
console.log("movieList", movieList);
