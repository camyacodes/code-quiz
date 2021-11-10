var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("timer");
var answerChoices = document.querySelector(".answers-choices");
var instructions = document.querySelector("#instructions");
var questionEl = document.querySelector("#Question");

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
  answerChoices.hidden = false;
  startBtn.hidden = true;
  instructions.hidden = true;
  questionEl.textContent = "Question 1";
}

startBtn.addEventListener("click", timer);
