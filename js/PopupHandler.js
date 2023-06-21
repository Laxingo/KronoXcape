// Function to open the Fill In pop-up window
function openFillInPopup() {
  const width = 800;
  const height = 450;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  const fillinWindow = window.open('fill.html', '_blank', options);

  fillinWindow.onbeforeunload = function() {
    setTimeout(() => {
      var progressBar = document.querySelector('.progress-bar');
      var currentWidth = parseInt(progressBar.style.width, 10);
      var newWidth = currentWidth + 25;
      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth);

      document.getElementById('pyramid2').style.display = 'inline';

      document.getElementById('fillin-popup').removeEventListener('click', openFillInPopup);
    }, 50);
  };
}

// Function to open the Questions pop-up window
function openQuestionsPopup() {
  const width = 700;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  const questionsWindow = window.open('questions.html', '_blank', options);

  questionsWindow.onbeforeunload = function() {
    setTimeout(() => {
      var progressBar = document.querySelector('.progress-bar');
      var currentWidth = parseInt(progressBar.style.width, 10);
      var newWidth = currentWidth + 25;
      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth);

      document.getElementById('pyramid1').style.display = 'inline';

      document.getElementById('questions-popup').removeEventListener('click', openQuestionsPopup);
    }, 50);
  };
}

// Function to open the Sliding Puzzle pop-up window
function openPopup() {
  const width = 400;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  const puzzleWindow = window.open('slidingPuzzle.html', '_blank', options);

  puzzleWindow.onbeforeunload = function() {
    setTimeout(() => {
      var progressBar = document.querySelector('.progress-bar');
      var currentWidth = parseInt(progressBar.style.width, 10);
      var newWidth = currentWidth + 40;
      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth);

      if (newWidth >= 100) {
        // Progress bar is filled, show alert
        alert('Congratulations!! You escaped the room!');

        // Redirect to index.html after the alert is closed
        setTimeout(() => {
          window.location.replace('../html/index.html');
        }, 3500); // Adjust the delay (in milliseconds) as needed
      }
    });
  };
}



// Event listeners for the pop-up triggers
document.getElementById('fillin-popup').addEventListener('click', openFillInPopup);
document.getElementById('questions-popup').addEventListener('click', openQuestionsPopup);

// Event listener for the wall-popup1 click to replace the image
document.getElementById('wall-popup1').addEventListener('click', function() {
  // Get the image elements
  var roomImg = document.querySelector('.roomImg');
  var pyramid1Img = document.getElementById('pyramid1');
  var pyramid2Img = document.getElementById('pyramid2');

  
  roomImg.setAttribute('src', '../Images/rooms/quarto_insertedphase1.png');

  pyramid1Img.style.display = 'none';

  if (pyramid1Img.style.display === 'none' && pyramid2Img.style.display === 'none'){
    roomImg.setAttribute('src', '../Images/rooms/quarto_insertedphase3.png');
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = parseInt(progressBar.style.width, 10);
    var newWidth = currentWidth + 5;
    progressBar.style.width = newWidth + '%';
    progressBar.setAttribute('aria-valuenow', newWidth);
  }

  if (pyramid1Img.style.display === 'none') {
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = parseInt(progressBar.style.width, 10);
    var newWidth = currentWidth + 5;
    progressBar.style.width = newWidth + '%';
    progressBar.setAttribute('aria-valuenow', newWidth);

    
    document.getElementById('open-popup').addEventListener('click', openPopup);
  }
});

document.getElementById('wall-popup2').addEventListener('click', function() {
  var roomImg = document.querySelector('.roomImg');
  var pyramid2Img = document.getElementById('pyramid2');
  var pyramid1Img = document.getElementById('pyramid1');

  roomImg.setAttribute('src', '../Images/rooms/quarto_insertedphase3.png');

  pyramid2Img.style.display = 'none';

  if (pyramid1Img.style.display !== 'none' && pyramid2Img.style.display === 'none'){
    roomImg.setAttribute('src', '../Images/rooms/quarto_insertedphase2.png');
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = parseInt(progressBar.style.width, 10);
    var newWidth = currentWidth + 5;
    progressBar.style.width = newWidth + '%';
    progressBar.setAttribute('aria-valuenow', newWidth);
  }


  if (pyramid2Img.style.display === 'none') {
    var progressBar = document.querySelector('.progress-bar');
    var currentWidth = parseInt(progressBar.style.width, 10);
    var newWidth = currentWidth + 5;
    progressBar.style.width = newWidth + '%';
    progressBar.setAttribute('aria-valuenow', newWidth);
  }
});