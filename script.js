//var testing = prompt("Prepare to begin the Coding Quiz Challenge!")
var questionEl = document.getElementById("questionNum");
var answersEl = document.querySelector(".answerChoices");
// var nextQuestionEl = document.getElementById("nextQuestion");
// var prevQuestionEl = document.getElementById("prevQuestion");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var startBtn = document.getElementById("startbutton");
var cardEl = document.getElementsByClassName("card");
//var questionNumEl = document.getElementById("questionNum");
var bottomTextEl = document.getElementById("bottomText");
var questionQueue = 0;
var timerEl = '';
var correctAnswer = 0;
var incorrectAnswer = 0;
var reviewEl = document.querySelector("#reviewAnswer");
var storeData = JSON.parse(localStorage.getItem('data'));
var timeEl = document.getElementById("timer");

var questionSequence = [{
    question: "Complete the common coding analogy: CSS is to JavaScript, as Microsoft Word is to ____?",
    answer1: "CALCULATOR",
    answer2: "POWERPOINT",
    answer3: "NOTEPAD",
    answer4: "WINDOWS 10",
    correct: "2"},
{
    question: "Javascript was initially desinged by Brendan Eich, while a developer for which tech company?",
    answer1: "MICROSOFT",
    answer2: "APPLE",
    answer3: "MOZILLA",
    answer4: "NETSCAPE",
    correct: "4"},
{
    question: "Which of the following is proper JavaScript notation for listing an array?",
    answer1: "SQUARE BRACKETS",
    answer2: "CURLY BRACKETS",
    answer3: "DOUBLE-QUOTES",
    answer4: "PARENTHESIS",
    correct: "1"},
{
    question: "True/False values are otherwise known in Javascript as?",
    answer1: "BOOLEAN VALUES",
    answer2: "BINARY VALUES",
    answer3: "LOGIC VALUES",
    answer4: "PROPOSITIONAL VALUES",
    correct: "1"},
];

var finalQuestion = questionSequence.length - 1;
var time = finalQuestion * 5;

function countdown() {
    timeEl.textContent = "Time Remaining: " + time;
    if (time > 0) {
        time--
    } else {
        gameEnd() //referenced among last functions, once quiz is complete or time runs out
    }
}

answersEl.style.display = "block";
bottomTextEl.style.display = "none";

function displayQuestions() {
    var questionShown = questionSequence[questionQueue];
    questionEl.textContent = questionSequence[questionQueue].question;
    choice1.innerHTML = questionShown.answer1El;
    choice2.innerHTML = questionShown.answer2El;
    choice3.innerHTML = questionShown.answer3El;
    choice4.innerHTML = questionShown.answer4El;
}

startBtn.addEventListener("click", beginQuiz);

function beginQuiz() {
    start.style.display = "none";
    choicesEl.style.display = 'block';
    timerEl = setInterval(countdown, 1000)
    displayQuestions();
}

function checkAnswer(userAnswer) {
    console.log('userAnswer:', userAnswer)
    if (userAnswer === questionSequence[currentQuestion].correct) {
        captionEl.innerHTML = "Correct Answer";
        correctAnswer++;
    } else {
        captionEl.innerHTML = "Incorrect Answer";
        incorrectAnswer++;
        time--
    }
}

if (currentQuestion < finalQuestion) {
    currentQuestion++
    displayQuestions();
} else {
    gameEnd();
}

function gameEnd() {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    bottomTextEl.style.display = "block";
    reviewEl.style.display = "none";
    clearInterval(timerEl);
}






















// Questions
// 1 Complete the common coding analogy: CSS is to JavaScript, as Microsoft Word is to ____
//     1. CALCULATOR
//     2. POWERPOINT
//     3. NOTEPAD
//     4. WINDOWS 10
//     CORRECT ANSWER: ANSWER2

//  2 Javascript was initially desinged by Brendan Eich, while a developer for which tech company?
//     1. MICROSOFT
//     2. APPLE
//     3. MOZILLA
//     4. NETSCAPE
//     CORRECT ANSWER: ANSWER4

// 3 Which of the following is proper JavaScript notation for listing an array?
//     1. SQUARE BRACKETS
//     2. CURLY BRACKETS
//     3. DOUBLE-QUOTES
//     4. PARENTHESIS
//     CORRECT ANSWER: ANSWER1

// 4 True/False values are otherwise known in Javascript as?
//     1. BOOLEAN VALUES
//     2. BINARY VALUES
//     3. LOGIC VALUES
//     4. PROPOSITIONAL VALUES
//     CORRECT ANSWER: ANSWER1





