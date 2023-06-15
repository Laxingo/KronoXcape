// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the timer element
  var timerElement = document.getElementById("timer-text");

  // Set the initial time to 5 minutes (300 seconds)
  var timeInSeconds = 300;

  // Update the timer text with the initial time
  timerElement.textContent = formatTime(timeInSeconds);

  // Create an interval that updates the timer every second
  var countdownInterval = setInterval(function() {
    // Decrease the remaining time by 1 second
    timeInSeconds--;

    // Update the timer text with the new remaining time
    timerElement.textContent = formatTime(timeInSeconds);

    // Check if the timer has reached 0
    if (timeInSeconds === 0) {
      // Stop the interval
      clearInterval(countdownInterval);

      // Perform any actions when the timer reaches 0
      alert("Time's up!");
    }
  }, 1000);

  // Function to format the time in MM:SS format
  function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;
    return pad(minutes) + ":" + pad(seconds);
  }

  // Function to pad single-digit numbers with leading zeros
  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }
});
