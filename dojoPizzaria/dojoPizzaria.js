// RANDOM PIZZA

function randomPizza() {
  var crustType = ["Deep Dish", "hand tossed", "stuffed crust"];
  var sauceType = ["Traditional", "Marinara", "ranch", "bbq"];
  var cheeses = ["mozzerella", "Feta", "pepper jack"];
  var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "black olives",
    "onions",
    "green olives",
    "banana peppers",
  ];
  var randCrust = crustType[Math.floor(Math.random() * (crustType.length - 1))];
  var randSauce = sauceType[Math.floor(Math.random() * (sauceType.length - 1))];
  var randCheese = cheeses[Math.floor(Math.random() * (cheeses.length - 1))];
  var randTopping = toppings[Math.floor(Math.random() * (toppings.length - 1))];

  var randPizza = {};
randPizza.crust = randCrust;
randPizza.sauce = randSauce;
randPizza.cheese = randCheese;
randPizza.topping = randTopping;

  return randPizza;
}
console.log(randomPizza());

//PIZZA OVEN

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var order1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzerella"],
  ["pepperoni", "sausage"]
);
console.log(order1);
var order2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzerella", "feta"],
  ["mushrooms", "olives", "olives"]
);
console.log(order2);
var order3 = pizzaOven(
  "deep dish",
  "ranch",
  ["mozzerella"],
  ["chicken", "bacon", "mushrooms"]
);
console.log(order3);
var order4 = pizzaOven(
  "cheese stuffed",
  "marinara",
  ["mozzerella", "cheddar", "pepper jack"],
  ["pepperoni", "mushrooms", "black olives", "bell peppers"]
);
console.log(order4);
