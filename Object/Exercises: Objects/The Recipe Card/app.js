var recipe = {};

function recipeCreate(title, servings, ingredients) {
  recipe.title = title;
  recipe.servings = servings;
  recipe.ingredients = ingredients;
  console.log(recipe);
}

recipeCreate("Pizza", 2, ["dough", "tomato", "cheese"]);

recipeCreate("Salad", 1, ["lettuce", "tomato", "cheese"]);
recipeCreate("hamburger", 2, ["meat", "tomato", "cheese"]);
recipeCreate("Cake", 1, ["flour", "sugar", "eggs"]);
recipeCreate("pancakes", 2, ["dough", "tomato", "cheese"]);

console.log("--------------");
console.log(recipe.title);
console.table("Servings: " + recipe.servings);
console.table("Ingredients:");
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.table(recipe.ingredients[i]);
}
