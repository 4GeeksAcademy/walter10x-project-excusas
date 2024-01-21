/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/dog.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// Función para generar un número aleatorio dentro del array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Función para generar una excusa  que sea aleatoria
function generateExcuse() {
  let randomWho = who[getRandomIndex(who)];
  let randomAction = action[getRandomIndex(action)];
  let randomWhat = what[getRandomIndex(what)];
  let randomWhen = when[getRandomIndex(when)];

  // Construir la excusa completa en orden

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  // Devolver la excusa generada
  return excuse;
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//
window.onload = function() {
  // Obtener el elemento HTML con el id 'excuse'
  let excuseElement = document.getElementById("excuse");

  // Verificar si el elemento existe antes de actualizar su contenido
  if (excuseElement) {
    // Generar una excusa y establecerla en el innerHTML del elemento HTML con el id de  #excuse
    excuseElement.innerHTML = generateExcuse();
  }
};
