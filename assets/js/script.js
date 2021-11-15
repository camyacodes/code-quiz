var mostRecentScore = localStorage.getItem("mostRecentScore");
var saveScoreBtn = document.getElementById("submit");
var username = document.getElementById("username");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("HighScoresList");

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  console.log(score);
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.replace("https://camyacodes.github.io/code-quiz/");
};

viewScores = (e) => {
  e.preventDefault();
  var questionEl = document.getElementById("Question");
  questionEl.textContent = "High Scores";
  var mainContent = document.getElementById("main-content");
  mainContent.hidden = true;
  highScoresList.innerHTML = highScores
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
  var homeBtn = document.getElementById("homebtn");
  homeBtn.hidden = false;
  homeBtn.addEventListener("click", function () {
    window.location.replace("https://camyacodes.github.io/code-quiz/");
  });
};

var questions = [
  {
    question: "Commonly used data types do NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: 2,
  },
  {
    question: "The condition in an if/else statement is enclosed with _______.",
    options: [
      "1. qoutes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: 3,
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: 2,
  },
];



//define global variables that can be used in all of the functions
var timeLeft = 75;
var currPosition = 0;

var app = {
  //this is the starting function that sets the variables and order of the other functions
  start: function () {
    //set score to 0
    this.score = 0;
    //target start button in html
    var startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", () => {
      // when the start button is clicked, hide the instructions and start button
      var startPg = document.getElementById("startPage");
      startPg.hidden = true;
      //start the timer
      this.timer();
      // call show first question function
      this.showQuestion(questions[currPosition]);
    });

    //get choices
    var choices = document.querySelectorAll(".answerChoice");
    //for each choice listen for a click
    choices.forEach((element, index) => {
      element.addEventListener("click", () => {
        //call check answer function when an  answer is clicked
        this.checkAnswer(index);
      });
    });
  },

  //defining timer function
  timer: () => {
    //get html element that displays timer on the webpage
    var timerEl = document.getElementById("timer");
    //set interval will repeat the following function every second
    var timeInterval = setInterval(function () {
      //if there is still time left, decrease by 1 sec
      if (timeLeft > 0) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
      } else if (currPosition == questions.length) {
        timerEl.textContent = "All done!";
        clearInterval(timeInterval);
      } else if (timeLeft === 0) {
        //if time is out, stop time interval
        timerEl.textContent = "Time's Up!";
        clearInterval(timeInterval);
        app.results();
      }
    }, 1000);
  },
  //function that dynamically changes html to show question on the webpage
  showQuestion: function (q) {
    //target question h1 element
    var questionEl = document.getElementById("Question");
    questionEl.textContent = q.question;
    var choices = document.querySelectorAll(".answerChoice");
    choices.forEach(function (element, index) {
      element.hidden = false;
      element.textContent = q.options[index];
    });
  },
  checkAnswer: function (userAnswer) {
    var currentQuestion = questions[currPosition];
    if (currentQuestion.answer == userAnswer) {
      this.score += 1;
      console.log(this.score);
    } else {
      timeLeft -= 10;
    }
    this.nextQuestion();

    this.showQuestion(questions[currPosition]);
  },

  nextQuestion: function () {
    currPosition++;
    if (currPosition == questions.length) {
      timeLeft = 0;
      this.results();
    }
  },

  results: function () {
    var answerContainer = document.getElementById("answers");
    answerContainer.hidden = true;
    var questionEl = document.getElementById("Question");
    questionEl.textContent = "Final Score: " + mostRecentScore;
    localStorage.setItem("mostRecentScore", this.score);
    var scoreForm = document.getElementById("scoreForm");
    scoreForm.hidden = false;
  },
};
app.start();

