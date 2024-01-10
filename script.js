const body = document.querySelector("body");
const main = document.createElement("main");
const gallows = document.createElement("section");
const word = document.createElement("section");
const question = document.createElement("section");
const statusCount = document.createElement("section");
const keyboard = document.createElement("section");

body.className = "page";

main.className = "main";

gallows.className = "gallows";

word.className = "word";

question.className = "question";

statusCount.className = "status";

keyboard.className = "keyboard";

main.appendChild(gallows);
main.appendChild(word);
main.appendChild(gallows);
main.appendChild(question);
main.appendChild(statusCount);
main.appendChild(keyboard);
body.appendChild(main);

//
//create virtual keyboard

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

alphabet.forEach((letter, index) => {
  const button = document.createElement("div");
  button.className = "keyboard__button";
  button.innerText = letter.toUpperCase();
  keyboard.appendChild(button);
});

const buttons = keyboard.querySelectorAll("div");
