var startBtn = document.querySelector ("#start-btn")
var timerEl = document.getElementById("timer")

function timer() {
    var timeLeft = 75;
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft --;
        } else { 
            timerEl.textContent = "0"
            clearInterval(timeInterval)
        }
    },1000)
}

startBtn.addEventListener ("click", timer)