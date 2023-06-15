document.addEventListener("DOMContentLoaded", function() {
    var timerElement = document.getElementById("timer-text");
    var timeInSeconds = 360;
    timerElement.textContent = formatTime(timeInSeconds);
  
    var countdownInterval = setInterval(function() {
      timeInSeconds--;
      timerElement.textContent = formatTime(timeInSeconds);
  
      if (timeInSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
      } else if(timeInSeconds<=300 && timeInSeconds >= 0) {
        var isEvenSecond = timeInSeconds % 2 === 0;
        timerElement.style.color = isEvenSecond ? "red" : ""; // Toggle text color every second
      }
    }, 1000);
  
    function formatTime(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = timeInSeconds % 60;
      return pad(minutes) + ":" + pad(seconds);
    }
  
    function pad(number) {
      return (number < 10 ? "0" : "") + number;
    }
  });
  
  
  