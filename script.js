//variables for hosting questions and answer choices
var questionEl = document.querySelector(".display-4");
var answersEl = document.querySelector(".lead");

var startBtn = document.getElementById("startbutton");
var highscoreEl = document.getElementById("highscore");

var bottomTextEl = document.getElementById("bottomText");
var questionQueue = 0;
var timerobject = '';
var correctAnswer = 0;
var incorrectAnswer = 0;
//other variables needed?
// var reviewEl = document.querySelector("#reviewAnswer");

var saveData = JSON.parse(localStorage.getItem('data')); 
var timerEl = document.getElementById("timer");
console.log('timerEl:', timerEl);
console.log('timerobject', timerobject);


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
    question: "Which of the following is proper JavaScript notation for listing an array",
    answers: ["CURLY BRACKETS", "SQUARE BRACKETS", "DOUBLE-QUOTES", "PARENTHESIS"],
    correctAnswer: "SQUARE BRACKETS"
},
{
    question: "True/False values are otherwise known in Javascript as?",
    answers: ["BOOLEAN VALUES", "BINARY VALUES", "LOGIC VALUES", "PROPOSITIONAL VALUES"],
    correctAnswer: "BOOLEAN VALUES"
}];

var lastQuestion = questionSequence.length -1;
var time = lastQuestion * 20;

function countdown () {
    timerEl.textContent = "Time Remaining: " + time;
    if (time > 0) {
        time--
    } else {
        endofgame()
    }};

function displayQuestions() {
   questionEl.textContent = questionSequence[questionQueue].question
    answersEl.textContent = questionSequence[questionQueue].answers;
};

startBtn.addEventListener("click", beginQuiz);

function beginQuiz() {
    timerobject = setInterval(countdown, 1000);
    displayQuestions();


function checkAnswer(userChoice) {
    if (userChoice == questionSequence[questionQueue].correct) {
        captionEl.innerText = 'Correct Answer'
        correctAnswer++
    } else {
        captionEl.innerText = 'Wrong Answer'
        wrongAnswer++;
        time--
    } if (questionQueue < lastQuestion) {
        questionQueue++
        displayQuestions();
    } else {
        endofgame();
    }
}};

function endofgame() {
    questionEl.innerHTML = "JavaScript Coding Quiz";
    answersEl.innerHTML = "The following is a timed-quiz, containing multiple-choice questions";
    clearInterval(timerobject)
};

function user() {
var userInitials = document.getElementById('userInitials').value
savedata.push({
    user: userInitials,
    score: correctAnswer,
    time: 10 - timerobject,
})

localStorage.setItem('data', JSON.stringify(savedata))
endTextEl.innerHTML = '<h1> Thank you for playing </h1>'
highscoreEl.innerHTML = ('View Highscore:' + ' ' + JSON.parse(localStorage.getItem('data'))[0].score);
}