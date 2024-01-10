const body = document.querySelector("body");
const container = document.createElement("main");
const gallows = document.createElement("section");
const word = document.createElement("section");
const question = document.createElement("section");
const statusCount = document.createElement("section");
const keyboard = document.createElement("section");

body.className = "page";

container.className = "wrapper";
container.innerText = "1asda1";

gallows.className = "gallows";

word.className = "word";

question.className = "question";

statusCount.className = "status";

keyboard.className = "keyboard";

container.appendChild(gallows);
container.appendChild(word);
container.appendChild(gallows);
container.appendChild(question);
container.appendChild(statusCount);
container.appendChild(keyboard);
body.appendChild(container);

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
