var questions = [
  {
    question: "What is 10/2?",
    options: ["3", "5", "115", "0"],
    answer: 0,
  },
  {
    question: "What is 20/2?",
    options: ["3", "5", "115", "0"],
    answer: 0,
  },
  {
    question: "What is 10/1?",
    options: ["3", "5", "115", "0"],
    answer: 0,
  },
  {
    question: "What is 3/1?",
    options: ["3", "5", "115", "0"],
    answer: 0,
  },
];

//define global variables that can be used in all of the functions
var timeLeft = 2000;
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
        timerEl.textContent = "Finished early";
        clearInterval(timeInterval);
      } else if (timeLeft === 0) {
        //if time is out, stop time interval
        timerEl.textContent = "Time's Up!";
        clearInterval(timeInterval);
        app.results()
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

  results: function() {
    var answerContainer = document.getElementById("answers");
    answerContainer.hidden = true;
    var questionEl = document.getElementById("Question");
    questionEl.textContent = "Final Score: " + this.score;
    var scoreForm = document.getElementById("scoreForm")
    scoreForm.hidden = false;
  },
};
app.start();
// let x = 0;
// var currentQuestion = {};
// var availableQuestions = [...questions];
// currentQuestion = availableQuestions[x];
// var score = 0;

// var initialTime = 75;
// var timeLeft = initialTime;

// function stopTimer() {
//   clearInterval(timeInterval);
// }

// function timeInterval() {
//   if (timeLeft > 0) {
//     timerEl.textContent = "Time: " + timeLeft;
//     timeLeft--;
//   } else {
//     timerEl.textContent = "0";
//     stopTimer();
//   }
// }

// function timer() {
//   setInterval(timeInterval, 1000);
//   quiz();

// var timeInterval = setInterval(function () {
//   if (timeLeft > 0) {
//     timerEl.textContent = "Time: " + timeLeft;
//     timeLeft = timeLeft - 1;
//   } else {
//     timerEl.textContent = "0";
//     clearInterval(timeInterval);
//   }
// }, 1000);
// }

// function quiz() {
//   startQuiz(currentQuestion);
//   showChoices(currentQuestion);

//   // x++;
//   // choices.forEach((choice) => {
//   //   var number = choice.dataset["number"];
//   //   choice.innerText = currentQuestion["choice" + number];
//   //   choice.addE                     ventListener("click", selectedAnswer);
//   //   function selectedAnswer() {
//   //     var answer = currentQuestion["answer"];
//   //     if (choice.innerText === currentQuestion['choice' + answer]) {
//   //       score = +10;
//   //       console.log(score);
//   //       choices.forEach((choice) => {
//   //         currentQuestion = availableQuestions[x];
//   //         var number = choice.dataset["number"];
//   //         choice.innerText = currentQuestion["choice" + number];
//   //       });
//   //     }
//   //   }
//   // });
// }

// function startQuiz(currentQuestion) {
//   answerChoicesEl.hidden = false;
//   startBtn.hidden = true;
//   instructions.hidden = true;
//   questionEl.textContent = currentQuestion["question"];
// }

// function selectedAnswer() {
//   var answer = currentQuestion["answer"];
//   if (this.innerText === currentQuestion["choice" + answer]) {
//     score++;
//     console.log(score);
//     next();
//   } else if (this.innerText !== currentQuestion["choice" + answer]) {
//   // console.log('Time Left before penalizing', timeLeft);
//   timeLeft -= 10;
//   // console.log('Time Left after penalizing', timeLeft);
//     next();
//   }
// }
// function showChoices(currentQuestion) {
//   // console.log(currentQuestion);
//   for (let choice of choices) {
//     var number = choice.dataset["number"];
//     choice.innerText = currentQuestion["choice" + number];
//     choice.addEventListener("click", selectedAnswer);

//     // choices.forEach((choice) => {
//     //   var number = choice.dataset["number"];
//     //   choice.innerText = currentQuestion["choice" + number];
//     // choice.addEventListener("click", selectedAnswer);
//     // function selectedAnswer() {
//     //   var answer = currentQuestion["answer"];
//     //   if (choice.innerText === currentQuestion["choice" + answer]) {
//     //     score = +10;
//     //     console.log(score);
//     //     choices.forEach((choice) => {
//     //       currentQuestion = availableQuestions[x];
//     //       var number = choice.dataset["number"];
//     //       choice.innerText = currentQuestion["choice" + number];
//     //     });
//     //   }
//     // }
//     // });
//   }
// }

// // function showChoices(currentQuestion) {
// //   console.log(currentQuestion);
// //   for (let choice of choices) {
// //     var number = choice.dataset["number"];
// //     choice.innerText = currentQuestion["choice" + number];
// //     choice.addEventListener("click", selectedAnswer);
// //     function selectedAnswer() {
// //       var answer = currentQuestion["answer"];
// //       if (choice.innerText === currentQuestion["choice" + answer]) {
// //         score++;
// //         console.log(score);
// //         next();
// //       } else if (choice.innerText !== currentQuestion["choice" + answer]) {
// //         console.log('Time Left before penalizing', timeLeft);
// //         timeLeft -= 10;
// //         timerEl.textContent = "Time: " + timeLeft;
// //       console.log('Time Left after penalizing', timeLeft);
// //         next();
// //       }
// //     }
//     // choices.forEach((choice) => {
//     //   var number = choice.dataset["number"];
//     //   choice.innerText = currentQuestion["choice" + number];
//     // choice.addEventListener("click", selectedAnswer);
//     // function selectedAnswer() {
//     //   var answer = currentQuestion["answer"];
//     //   if (choice.innerText === currentQuestion["choice" + answer]) {
//     //     score = +10;
//     //     console.log(score);
//     //     choices.forEach((choice) => {
//     //       currentQuestion = availableQuestions[x];
//     //       var number = choice.dataset["number"];
//     //       choice.innerText = currentQuestion["choice" + number];
//     //     });
//     //   }
//     // }
//     // });
// //   }
// // }

// // function userAnswer() {
// //   for (let choice of choices) {
// //     choice.addEventListener("click", selectedAnswer);
// //     function selectedAnswer() {
// //       var answer = currentQuestion["answer"];
// //       if (choice.innerText === currentQuestion["choice" + answer]) {
// //         score = +10;
// //         console.log(score);
// //       }
// //       // else if (choice.innerText !== currentQuestion["choice" + answer]) {

// //       // }

// //       next();
// //     }
// //   }
// // }

// function next() {
//   x++;
//   var currentQuestion = {};
//   var availableQuestions = [...questions];
//   currentQuestion = availableQuestions[x];
//   questionEl.textContent = currentQuestion["question"];
//   if (currentQuestion == availableQuestions.length) {
//     console.log("finished")
//   }
//   showChoices(currentQuestion)
//   // console.log(currentQuestion);
//   // if(x > 3) {
//   //   // questionEl.textContent = currentQuestion["question"];
//   //   // console.log(questionEl.innerText)
//   //   console.log("home")
//   //   // showChoices(currentQuestion);
//   // } else {
//   //   // console.log("home")
//   //   showChoices(currentQuestion);
//   // }
//   // questionEl.textContent = currentQuestion["question"];
//   // // console.log(questionEl.innerText)
//   // showChoices(currentQuestion);

// }

// startBtn.addEventListener("click", timer);

// // choices.onclick = () => {
// // 	choices.forEach((choice) => {
// // 		if (choice.innerText === currentQuestion[ 'choice' + 'answer'] ) {
// // 			window.alert("It works!!")
// // 		}

// // }
