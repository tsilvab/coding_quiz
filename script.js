const startButton = document.querySelector("#start");
const questionEl = document.querySelector("#question");
const choicesButton = document.querySelectorAll(".choices")
const questionContainer = document.querySelector("#question-container")
const scoreContainer = document.getElementById("scoreContainer")
const info = document.querySelector("#info-container")
const choicesList = document.querySelector(".choices-list")
const choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")
let choice4 = document.getElementById("choice4")
let timer = document.querySelector(".timer")
let submit = document.querySelector(".submit")
let initals = document.querySelector(".initals")
let timerInterval = -1;
let questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choices1: "strings",
        choice2: "Booleans",
        choice3: "alerts",
        choice4: "numbers",
        correct: "choice3"

    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parathesis",
        choice4: "square brackets",
        correct: "choice3"

    },

    {
        question: "Arrays in javascript can be used to store ___.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correct: "choice4"


    },

    {
        question: "String values must be enclosed within ___.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parathesis",
        correct: "choice3"

    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "javascript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console log",
        correct: "choice4"
    }
]

let lastQuestion = questions.length - 1
let currentQuestion = 0
let score = 0
let time = 10
let timeLeft = 60
function showQuestion() {
    let quest = questions[currentQuestion];

    question.textContent = quest.question;
    choice1.innerText = quest.choice1;
    choice2.textContent = quest.choice2;
    choice3.textContent = quest.choice3;
    choice4.textContent = quest.choice4;
}

for (let i = 0; i < choicesButton.length; i++) {
    choicesButton[i].addEventListener("click", getAnswer);
}


startButton.addEventListener("click", startQuiz);

function setTime() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            renderScore();
            timer.textContent = 0;
            clearInterval(timerInterval);
        }
    }, 1000);
}

function startQuiz() {
    startButton.style.display = "none";
    info.style.display = "none";
    showQuestion();
    questionContainer.style.display = "block";
    setTime();
}

function getAnswer(event) {
    const questionObj = questions[currentQuestion];
    const correctAnswerProperty = questions[currentQuestion].correct;
    const correctAnswer = questionObj[correctAnswerProperty];

    if (event.target.textContent !== correctAnswer) {
        alert("Wrong! Try Again.");
        timeLeft -= 10;


    } else if (currentQuestion < lastQuestion) {
        currentQuestion++;
        score++;
        showQuestion();
    } else {
        renderScore();
        clearInterval(timerInterval);

    }
}

function renderScore() {
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";

}
submit.addEventListener("click", function (event) {
    event.preventDefault();

    let initalsInput = document.querySelector(".intials").value;
    localStorage.setItem('initalInput', "inital");
});
const arr = [{
    name: '',
    value: "score"
}, {
    name: '',
    value: "score"
}];

localStorage.setItem('score', JSON.stringify(arr));

const arrData = localStorage.getItem('score');
const arr2 = JSON.parse(arrData);
