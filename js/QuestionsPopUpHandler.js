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
        var newWidth = currentWidth + 20;
        progressBar.style.width = newWidth + '%';
        progressBar.setAttribute('aria-valuenow', newWidth); 
      });
    };
  }

  document.getElementById('questions-popup').addEventListener('click', openQuestionsPopup);