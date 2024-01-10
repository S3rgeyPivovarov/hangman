import questionObj from "./question.js";

const body = document.getElementsByTagName("body");
const container = document.createElement("main");
const gallows = document.createElement("figure");
const word = document.createElement("section[class='word']");
const question = document.createElement("section[class='question']");
const statusCount = document.createElement("section[class='status']");
const keyboard = document.createElement("section[class='keyboard']");

body.className = "page";

container.className = "wrapper";

gallows.className = "gallows";

word.className = "word";

question.className = "question";

statusCount.className = "status";

console.log(questionObj);
