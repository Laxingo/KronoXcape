function openFillInPopup() {
  const width = 800;
  const height = 450;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  const fillinWindow = window.open('fill.html', '_blank', options);

  fillinWindow.onbeforeunload = function () {
    
    setTimeout(() => {
      var progressBar = document.querySelector('.progress-bar');
      var currentWidth = parseInt(progressBar.style.width, 10);
      var newWidth = currentWidth + 25;
      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth); 

      // Display the pyramid image in the first inventory square
      document.getElementById('pyramid2').style.display = 'inline';
      
      // Disable the event listener to prevent further popups
      document.getElementById('fillin-popup').removeEventListener('click', openFillInPopup);
    }, 50);
  };
}

function openQuestionsPopup() {
  const width = 700;
  const height = 400;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  const questionsWindow = window.open('questions.html', '_blank', options);

  questionsWindow.onbeforeunload = function () {
    setTimeout(() => {
      var progressBar = document.querySelector('.progress-bar');
      var currentWidth = parseInt(progressBar.style.width, 10);
      var newWidth = currentWidth + 25; 
      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth); 

      // Display the pyramid image in the first inventory square
      document.getElementById('pyramid1').style.display = 'inline';
      
      // Disable the event listener to prevent further popups
      document.getElementById('questions-popup').removeEventListener('click', openQuestionsPopup);
    }, 50);
  };
}

  function openPopup() {
      const width = 400;
      const height = 400;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      const options = `width=${width},height=${height},left=${left},top=${top}`;
      const puzzleWindow = window.open('slidingPuzzle.html', '_blank', options);

      puzzleWindow.onbeforeunload = function () {
        setTimeout(() => {
          var progressBar = document.querySelector('.progress-bar');
          var currentWidth = parseInt(progressBar.style.width, 10);
          var newWidth = currentWidth + 20;
          progressBar.style.width = newWidth + '%';
          progressBar.setAttribute('aria-valuenow', newWidth); 
        });
      };
    }
  document.getElementById('fillin-popup').addEventListener('click', openFillInPopup);  
  document.getElementById('questions-popup').addEventListener('click', openQuestionsPopup);
  document.getElementById('open-popup').addEventListener('click', openPopup);