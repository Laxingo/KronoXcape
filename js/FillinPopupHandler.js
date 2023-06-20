function openFillInPopup() {
    const width = 400;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
    const fillinWindow = window.open('fill.html', '_blank', options);

    fillinWindow.onbeforeunload = function () {
      
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