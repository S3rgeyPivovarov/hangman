//
// create elements

const body = document.getElementsByTagName("body")[0];
const main = document.createElement("main");
const gallows = document.createElement("section");
const container = document.createElement("section");
const word = document.createElement("div");
const question = document.createElement("div");
const statusCount = document.createElement("div");
const keyboard = document.createElement("div");

//
// create structure DOM

container.appendChild(gallows);
container.appendChild(word);
container.appendChild(question);
container.appendChild(statusCount);
container.appendChild(keyboard);

main.appendChild(gallows);
main.appendChild(container);

body.appendChild(main);

//
// add CSS class for element

body.className = "page";

main.className = "main";

container.className = "container";

gallows.className = "gallows";

word.className = "word";

question.className = "question";

statusCount.className = "status";

keyboard.className = "keyboard";

//
// create virtual keyboard

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

//
// create gallows

const figureWrapper = document.createElement("figure");

const hanger = document.createElement("img");
const dollHead = document.createElement("img");
const dollHandOne = document.createElement("img");
const dollHandTwo = document.createElement("img");
const dollBody = document.createElement("img");
const dollLegOne = document.createElement("img");
const dollLegTwo = document.createElement("img");

const figureCaption = document.createElement("figcaption");

figureWrapper.appendChild(hanger);
figureWrapper.appendChild(dollHead);
figureWrapper.appendChild(dollHandOne);
figureWrapper.appendChild(dollBody);
figureWrapper.appendChild(dollHandTwo);
figureWrapper.appendChild(dollLegOne);
figureWrapper.appendChild(dollLegTwo);

gallows.appendChild(figureWrapper);
gallows.appendChild(figureCaption);

hanger.src = "picture/hanger.svg";
dollHead.src = "picture/doll/head.svg";
dollBody.src = "picture/doll/body.svg";
dollHandOne.src = "picture/doll/hand-one.svg";
dollHandTwo.src = "picture/doll/hand-two.svg";
dollLegOne.src = "picture/doll/leg-one.svg";
dollLegTwo.src = "picture/doll/leg-two.svg";

hanger.className = "gallows__hanger";
dollHead.className = "gallows__doll-head";
dollBody.className = "gallows__doll-body";
dollHandOne.className = "gallows__doll-hand-one";
dollHandTwo.className = "gallows__doll-hand-two";
dollLegOne.className = "gallows__doll-leg-one";
dollLegTwo.className = "gallows__doll-leg-two";

figureWrapper.className = "gallows__figure-wrapper";

figureCaption.className = "gallows__figure-caption";
figureCaption.innerText = "HANGMAN GAME";

/* dollHead.hidden = true;
dollBody.hidden = true;
dollHandOne.hidden = true;
dollHandTwo.hidden = true;
dollLegOne.hidden = true;
dollLegTwo.hidden = true; */

//
// create word field

const answer = questions[1].answer; // test

for (let i = 0; i < answer.length; i++) {
  const letter = document.createElement("div");
  letter.className = "word__letter";
  letter.innerText = answer.charAt(i); // test
  word.appendChild(letter);
}

//
// create question field

question.innerText = questions[1].question; // test

//
// create status count

const countText = document.createElement("label");
const countValue = document.createElement("div");

statusCount.appendChild(countText);
statusCount.appendChild(countValue);

countText.className = "status-count__text";
countValue.className = "status-count__value";

countText.innerText = "Incorrect guesses:";
countValue.innerText = "0 / 6"; // test
