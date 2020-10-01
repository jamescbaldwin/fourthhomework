//variables for hosting questions and answer choices
var questionEl = document.querySelector(".display-8");
var answersEl = document.querySelector(".lead");
var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");
var answer4 = document.getElementById("4");

var startBtn = document.getElementById("startbutton");
var highscoreEl = document.getElementById("highscore");
var captionEl = document.getElementById("caption");
var bottomTextEl = document.getElementById("bottomText");
var questionQueue = 0;
var timerobject = '';
var correctAnswerEl = 0;
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
    answer1: "CALCULATOR",
    answer2: "POWERPOINT",
    answer3: "NOTEPAD",
    answer4: "WINDOWS 10",
    correctAnswer: '2'
},
{
    question: "Javascript was initially desinged by Brendan Eich, while a developer for which tech company?",
    answer1: "MICROSOFT",
    answer2: "APPLE",
    answer3: "MOZILLA",
    answer4: "NETSCAPE",
    correctAnswer: '4'
},
{
    question: "Which of the following is proper JavaScript notation for listing an array",
    answer1: "CURLY BRACES",
    answer2: "SQUARE BRACKETS",
    answer3: "DOUBLE-QUOTES",
    answer4: "PARENTHESIS",
    correctAnswer: '2'
},
{
    question: "True/False values are otherwise known in Javascript as?",
    answer1: "BOOLEAN VALUES",
    answer2: "BINARY VALUES",
    answer3: "LOGIC VALUES",
    answer4: "PROPOSITIONAL VALUES",
    correctAnswer: '1'
}];

var lastQuestion = questionSequence.length -1;
var time = lastQuestion * 5; //20 = 1 minute/60 sec

function countdown () {
    timerEl.textContent = "Time Remaining: " + time;
    if (time > 0) {
        time--
    } else {
        endofgame()
    }}

 


function displayQuestions() {
   questionEl.textContent = questionSequence[questionQueue].question; //innerHMTL adds content wiithin given element, rather than changing content of element itself
    answer1.innerHTML = questionSequence[questionQueue].answer1;
    answer2.innerHTML = questionSequence[questionQueue].answer2;
    answer3.innerHTML = questionSequence[questionQueue].answer3;
    answer4.innerHTML = questionSequence[questionQueue].answer4;
}

startBtn.addEventListener("click", beginQuiz);

function beginQuiz() {
    // answersEl.style.display = "block";
    timerobject = setInterval(countdown, 1000);
    displayQuestions();
};

function checkAnswer(userAnswer) {
    console.log(userAnswer);
    if (userAnswer = questionSequence[questionQueue].correctAnswer) {
        captionEl.textContent = "Correct Answer"
        correctAnswerEl++
    } else {
        captionEl.textContent = "Incorrect Answer"
        incorrectAnswer++;
        time--
    } if (questionQueue < lastQuestion) {
        questionQueue++
        displayQuestions();
    } else {
        endofgame();
    }
}

function endofgame() {
    questionEl.innerHTML = "JavaScript Coding Quiz";
    answersEl.innerHTML = "The following is a timed-quiz, containing multiple-choice questions";
    clearInterval(timerobject)
}

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