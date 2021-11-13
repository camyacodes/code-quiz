var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("timer");
var answerChoicesEl = document.querySelector(".choices");
var choices = Array.from(document.querySelectorAll(".choice"));
var instructions = document.querySelector("#instructions");
var questionEl = document.querySelector("#Question");
// var buttonContainer = document.querySelector(".answers-choices");
// var button = document.querySelectorAll("button");

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
    choice3: "100",
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

let x = 0;
var currentQuestion = {};
var availableQuestions = [...questions];
currentQuestion = availableQuestions[x];
var score = 0;

var timeLeft = 75;

function timer() {
  quiz();
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
  startQuiz();
  showChoices(currentQuestion);

  // x++;
  // choices.forEach((choice) => {
  //   var number = choice.dataset["number"];
  //   choice.innerText = currentQuestion["choice" + number];
  //   choice.addEventListener("click", selectedAnswer);
  //   function selectedAnswer() {
  //     var answer = currentQuestion["answer"];
  //     if (choice.innerText === currentQuestion['choice' + answer]) {
  //       score = +10;
  //       console.log(score);
  //       choices.forEach((choice) => {
  //         currentQuestion = availableQuestions[x];
  //         var number = choice.dataset["number"];
  //         choice.innerText = currentQuestion["choice" + number];
  //       });
  //     }
  //   }
  // });
}

function startQuiz() {
  answerChoicesEl.hidden = false;
  startBtn.hidden = true;
  instructions.hidden = true;
  questionEl.textContent = currentQuestion["question"];
}

function showChoices(currentQuestion) {
  // console.log(currentQuestion)
  for (let choice of choices) {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  }

  userAnswer();

  // choices.forEach((choice) => {
  //   var number = choice.dataset["number"];
  //   choice.innerText = currentQuestion["choice" + number];
  // choice.addEventListener("click", selectedAnswer);
  // function selectedAnswer() {
  //   var answer = currentQuestion["answer"];
  //   if (choice.innerText === currentQuestion["choice" + answer]) {
  //     score = +10;
  //     console.log(score);
  //     choices.forEach((choice) => {
  //       currentQuestion = availableQuestions[x];
  //       var number = choice.dataset["number"];
  //       choice.innerText = currentQuestion["choice" + number];
  //     });
  //   }
  // }
  // });
}

function userAnswer() {
  for (let choice of choices) {
    choice.addEventListener("click", selectedAnswer);
    function selectedAnswer() {
      var answer = currentQuestion["answer"];
      if (choice.innerText === currentQuestion["choice" + answer]) {
        score = +10;
        console.log(score);
      } else if (choice.innerText !== currentQuestion["choice" + answer]) {
        timeLeft = timeLeft - 5;
      }

      console.log(timeLeft);
      next();
    }
  }
}

function next() {
  x++;
  var currentQuestion = {};
  var availableQuestions = [...questions];
  currentQuestion = availableQuestions[x];
  // console.log(currentQuestion);
  questionEl.textContent = currentQuestion["question"];
  showChoices(currentQuestion);
}

startBtn.addEventListener("click", timer);

// choices.onclick = () => {
// 	choices.forEach((choice) => {
// 		if (choice.innerText === currentQuestion[ 'choice' + 'answer'] ) {
// 			window.alert("It works!!")
// 		}

// }
