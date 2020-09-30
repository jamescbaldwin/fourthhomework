//variables for hosting questions and answer choices
var questionEl = document.getElementById("questionNum");
var answersEl = document.querySelector(".answerChoices");
//variables for individual answer choices
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
//beginnning the quiz, and displaying the highscore
var startBtn = document.getElementById("startbutton");
var highscoreEl = document.getElementById("highscore");
//other variables needed?
var reviewEl = document.querySelector("#reviewAnswer");
var storeData = JSON.parse(localStorage.getItem('data'));
var timerEl = document.getElementById("timer");
var bottomTextEl = document.getElementById("bottomText");
//object/index of question/answers, timer, quiz grader
var questionQueue = 0;
var timerobject = '';
var correctAnswer = 0;
var incorrectAnswer = 0;

// create buttons dynamically and add set attribute -> to get thee value look into event.target.value 
// set timeout function 
// localstorage 

//object containing questions/answers
var questionSequence = [{
    question: "Complete the common coding analogy: CSS is to JavaScript, as Microsoft Word is to ____?",
    answers: ["CALCULATOR","POWERPOINT","NOTEPAD","WINDOWS 10"],
    correctAnswer: "POWERPOINT"
},
{
    question: "Javascript was initially desinged by Brendan Eich, while a developer for which tech company?",
    answers: ["MICROSOFT", "APPLE", "MOZILLA", "NETSCAPE"],
    correctAnswer: "NETSCAPE"
},
{
    question: "Which of the following is proper JavaScript notation for listing an array?",
    answers: ["CURLY BRACKETS", "SQUARE BRACKETS", "DOUBLE-QUOTES", "PARENTHESIS"],
    correctAnswer: "SQUARE BRACKETS"
},
{
    question: "True/False values are otherwise known in Javascript as?",
    answers: ["BOOLEAN VALUES", "BINARY VALUES", "LOGIC VALUES", "PROPOSITIONAL VALUES"],
    correctAnswer: "BOOLEAN VALUES"
}

function countdown() {
    setTimeout(function(){ alert("Hello"); }, 180000);
  }

startBtn.addEventListener("click", function () {
    for (let i = 0; i < questionSequence.length; i++) {
        const element = questionSequence[i];
        
    }
})
// var finalQuestion = questionSequence.length - 1;
// var time = finalQuestion * 5;

// function countdown() {
//     timerEl.textContent = "Time Remaining: " + time;
//     if (time > 0) {
//         time--
//     } else {
//         gameEnd() //referenced among last functions, once quiz is complete or time runs out
//     }
// }

// answersEl.style.display = "block";
// bottomTextEl.style.display = "none";

// function displayQuestions() {
//     var questionShown = questionSequence[questionQueue];
//     questionEl.textContent = questionSequence[questionQueue].question;
//     answer1El.innerHTML = questionShown.answer1El;
//     answer2El.innerHTML = questionShown.answer2El;
//     answer3El.innerHTML = questionShown.answer3El;
//     answer4El.innerHTML = questionShown.answer4El;
// }

// startBtn.addEventListener("click", beginQuiz);

// function beginQuiz() {
//     start.style.display = "none";
//     choicesEl.style.display = 'block';
//     timerEl = setInterval(countdown, 1000)
//     displayQuestions();
// }

// function checkAnswer(userAnswer) {
//     console.log('userAnswer:', userAnswer)
//     if (userAnswer === questionSequence[currentQuestion].correct) {
//         captionEl.innerHTML = "Correct Answer";
//         correctAnswer++;
//     } else {
//         captionEl.innerHTML = "Incorrect Answer";
//         incorrectAnswer++;
//         time--
//     }
// }

// if (currentQuestion < finalQuestion) {
//     currentQuestion++
//     displayQuestions();
// } else {
//     gameEnd();
// }

// function gameEnd() {
//     questionEl.style.display = "none";
//     answersEl.style.display = "none";
//     bottomTextEl.style.display = "block";
//     reviewEl.style.display = "none";
//     clearInterval(timerEl);
// }
