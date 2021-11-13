var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("timer");
var answerChoicesEl = document.querySelector(".choices");
var choices = Array.from(document.querySelectorAll(".choice"));
var instructions = document.querySelector("#instructions");
var questionEl = document.querySelector("#Question");
// var buttonContainer = document.querySelector(".answers-choices");
// var button = document.querySelectorAll("button");

var currentQuestion = {};

var questions = [
  {
    question: "What is 10/2?",
    choice1: "3",
    choice2: "5",
    choice3: "115",
    answer: 1,
  },
  {
    question: "What is 20/2?",
    choice1: "3",
    choice2: "10",
    choice3: "115",
    answer: 2,
  },
  {
    question: "What is 10/1?",
    choice1: "10",
    choice2: "5",
    choice3: "115",
    answer: 1,
  },
];

var availableQuestions = [...questions];
currentQuestion = availableQuestions[0];

function timer() {
  quiz();
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "0";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function quiz() {
  answerChoicesEl.hidden = false;
  startBtn.hidden = true;
  instructions.hidden = true;
  questionEl.textContent = questions[0].question;
  choices.forEach((choice) => {
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
	choice.addEventListener("click", selectedAnswer)
	function selectedAnswer() {
		  var answer = currentQuestion['answer'];
		  if(choice.innerText===currentQuestion["choice" + answer]){
			window.alert("It works!!")
		  };
	}
  });
 
}

startBtn.addEventListener("click", timer);

// choices.onclick = () => {
// 	choices.forEach((choice) => {
// 		if (choice.innerText === currentQuestion[ 'choice' + 'answer'] ) {
// 			window.alert("It works!!")
// 		}
	
	 
    
// }