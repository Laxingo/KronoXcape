function startTimer() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  let timerInterval;
let remainingTime = 900; // 15 minutes in seconds

function startTimer() {
  if (timerInterval) return; 
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = formatTime(minutes, seconds);
  document.getElementById("timer").textContent = formattedTime;

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    alert("Timer completed!");
  } else {
    remainingTime--;
  }
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
window.onload = function() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}


function formatTime(minutes, seconds) {
  return (
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
  );
}
function hideButton() {
  var map = document.getElementById("myMap");
  map.style.display = "none";
  console.log("OLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}
