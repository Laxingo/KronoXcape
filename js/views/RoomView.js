document.addEventListener("DOMContentLoaded", function() {
  var minutesDisplay = document.getElementById("minutes");
  var secondsDisplay = document.getElementById("seconds");
  var colonDisplay = document.getElementById("colon");

  var totalSeconds = 7 * 60;

  function updateTime() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    minutesDisplay.textContent = padTime(minutes);
    secondsDisplay.textContent = padTime(seconds);

    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      window.location.replace("../html/index.html");
    } else {
      if (minutes <= 5) {
        if (seconds % 2 === 0) {
          minutesDisplay.style.color = "red";
          secondsDisplay.style.color = "red";
          colonDisplay.style.color = "red";
        } else {
          minutesDisplay.style.color = "white";
          secondsDisplay.style.color = "white";
          colonDisplay.style.color = "white";
        }
      } else {
        minutesDisplay.style.color = "";
        secondsDisplay.style.color = "";
        colonDisplay.style.color = "";
      }
      totalSeconds--;
    }
  }

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }

  var timer = setInterval(updateTime, 1000);
});


