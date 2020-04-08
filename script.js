var secsElement = document.querySelector("#secs");
var startButton = document.querySelector("#start-button");
var messageElement = document.querySelector("h1");
var mainElement = document.querySelector("#main-content");
var textElement = document.querySelector("p");
var answerChoicesElement = document.querySelector("#answer-choices");
var timerSpan = document.createElement("span");

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["A. <Javascript>", "B. <js>", "C. <script>"],
    answer: 2,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "A. The <head> section",
      "B. The <body> section",
      "C. Both are correct",
    ],
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "A. <script href='xx.js'>",
      "B. <script name='xx.js'>",
      "C. <script src='xx.js'>",
    ],
    answer: 2,
  },
  {
    question: "Which class provides a responsive fixed width container?",
    choices: ["A. .container-fluid", "B. .container-fixed", "C. .container"],
    answer: 1,
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "A. Hyper Text Markup Language",
      "B. Hyperlinks and Text Markup Language",
      "C. Home Tool Markup Language",
    ],
    answer: 0,
  },
];

var secondsLeft;
var message = "JavaScript Quiz Challenge!";
var score = 0;

init();

function init() {
  secondsLeft = 90;
  messageElement.innerHTML = message;
  //   var score = 0;
}

function startQuiz() {
    textElement.remove();
    startButton.remove();
    var timerInterval = setInterval(function () {
      secondsLeft--;
      secsElement.textContent = secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    renderQuestions();
}



startButton.addEventListener("click", startQuiz);