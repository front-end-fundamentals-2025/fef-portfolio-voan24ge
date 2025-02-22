/* STRINGS */

let animal = "cat";

localStorage.animal = animal;

/*localStorage.animal = "dog"; */

let newAnimal = localStorage.animal;

console.log(newAnimal);

/* NUMBERS */

let number = 3;

localStorage.number = number;

let newNumber = parseInt(
  localStorage.number
); /*parseFloat for decimals (3.5)) */

console.log(newNumber + 1);

/* ARRAYS */

let animals = ["dog", "cat", "sheep"];

localStorage.animals = JSON.stringify(animals);

let newAnimals = JSON.parse(localStorage.animals);

console.log(newAnimals[0]);

/* OBJECTS */

let dog = { name: "Jerry", breed: "Cocker Spaniel" };

localStorage.dog = JSON.stringify(dog);

let newDog = JSON.parse(localStorage.dog);

console.log(newDog.name);
