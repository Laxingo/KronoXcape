var blanks = {
    1: {
      answer: "Egypt",  
      filled: false
    },
    2: {
      answer: "Pyramids",
      filled: false
    },
    3: {
      answer: "human",
      filled: false
    }

};
var currentBlankNumber = 1;
var resultElement = document.getElementById("result");
var sentenceElement = document.getElementById("sentence");
var options1Element = document.getElementById("options1");
var options2Element = document.getElementById("options2");
var options3Element = document.getElementById("options3");
var buttonElement = document.getElementById("restart")
var fillInElement = document.getElementById("fill-in")


function doSomethingAfterDelay(seconds, callback) {
  setTimeout(() => {
    window.close(); 
  }, 3000);
}

function hide(){
    options1Element.style.display = "none";
    options2Element.style.display = "none";
    options3Element.style.display = "none";
}
function restart(){
    currentBlankNumber=1;
    buttonElement.style.display="none";
    options1Element.style.display="block";
    sentenceElement.style.display="block";
    sentenceElement.innerHTML="The primary symbol of ancient ____ is it's ____.The great Sphinx of Giza has the body of a lion and the head of a ____."
    for (var blankNumber in blanks) {
        if (blanks.hasOwnProperty(blankNumber)) {
            blanks[blankNumber].filled = false;
        }
    }
}

function checkAnswer(blankNumber, selectedOption) {
    if (blankNumber === currentBlankNumber) {
      if (selectedOption === blanks[blankNumber].answer && !blanks[blankNumber].filled) {
        blanks[blankNumber].filled = true;
        resultElement.textContent = "Correct answer!";
        resultElement.style.color = "green"
        sentenceElement.innerHTML = sentenceElement.innerHTML.replace("____", selectedOption);
        currentBlankNumber++;
        if (currentBlankNumber === 2) {
          options1Element.style.display = "none";
          options2Element.style.display = "block";
        }
        if (currentBlankNumber ===3){
          options2Element.style.display = "none";
          options3Element.style.display = "block";
        }
        if (currentBlankNumber > Object.keys(blanks).length) {
          resultElement.textContent = "Congratulations! You filled all the blanks correctly.";
          resultElement.style.color = "green"
          hide()
          doSomethingAfterDelay()
        }
      } else {
        currentBlankNumber=1;
        resultElement.textContent = "Wrong answer. Try again.";
        resultElement.style.color = "red";
        hide();
        buttonElement.style.display="block";
      }
    }
}