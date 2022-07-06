let helloworld = (language) => {
  let helloWorld =
    language == "en"
      ? "Hello world"
      : language == "de"
      ? "Hallo Welt"
      : language == "fr"
      ? "Bonjour le monde"
      : language == "it"
      ? "Ciao mondo"
      : language == "es"
      ? "Hola Mundo"
      : language == "tr"
      ? "Merhaba Dünya"
      : "No such language found";
  return helloWorld;
};

console.log(helloworld("tr"));
console.log(helloworld("es"));
