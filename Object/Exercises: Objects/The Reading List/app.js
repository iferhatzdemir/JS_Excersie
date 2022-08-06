var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    console.log(
      "You already read " + books[i].title + " by " + books[i].author
    );
  } else {
    console.log(
      "You still need to read " + books[i].title + " by " + books[i].author
    );
  }
}
