let timer = 59;

const countdown = function(){
  const timer = document.getElementById("timer");
  timer.textContent -= 1;

  if (timer.textContent < 0) {
    alert("Вы победили в конкурсе!");
  }

}

setInterval(countdown, 1000);