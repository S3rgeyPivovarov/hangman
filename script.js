const body = document.getElementsByTagName("body")[0];
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
