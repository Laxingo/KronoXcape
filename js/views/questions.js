const question1Element = document.getElementById('question1');
    const question2Element = document.getElementById('question2');
    const question3Element = document.getElementById('question3');
    const question4Element = document.getElementById('question4');
    const questions = [1, 2, 3, 4];
    var resultElement = document.getElementById("result");
    let currentQuestionNumber = 0;
    let i = 0;
    let correctAnswerStreak = 0;
    // Function to shuffle the array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            }
        return array;
        }
        // Randomize the array
    const shuffledQuestions = shuffleArray(questions);
    // Hide all questions and answers
        function hideAllQuestions() {
            question1Element.style.display = 'none';
            question2Element.style.display = 'none';
            question3Element.style.display = 'none';
            question4Element.style.display = 'none';
        }
        // aparecer pergunta
        function showCurrentQuestion() {
            hideAllQuestions();
            currentQuestionNumber = shuffledQuestions[i++];
            
            if (currentQuestionNumber === 1) {
                question1Element.style.display = 'block';
            } else if (currentQuestionNumber === 2) {
                question2Element.style.display = 'block';
              } else if (currentQuestionNumber === 3) {
                question3Element.style.display = 'block';
              } else if (currentQuestionNumber === 4) {
                question4Element.style.display = 'block';
        }
    }
        // Restart the quiz
    function restart() {
        i = 0;
        correctAnswerStreak = 0;
        const shuffledQuestions = shuffleArray(questions);
        currentQuestionNumber = shuffledQuestions[i];
        showCurrentQuestion();
      }
      // Check the selected answer and check/update progress 
        function checkAnswer(currentQuestionNumber, selectedAnswer) {
          let correctAnswer;
          let resul;
          if (currentQuestionNumber === 1) {
            correctAnswer = 'b';
          } else if (currentQuestionNumber === 2) {
            correctAnswer = 'd';
          } else if (currentQuestionNumber === 3) {
            correctAnswer = 'd';
          } else if (currentQuestionNumber === 4) {
            correctAnswer = 'a';
          }
            if (selectedAnswer === correctAnswer) {
                resultElement.style.display='block';
                resultElement.textContent= 'Correct!';
                resultElement.style.color= 'green';
                console.log('uma pergutna correta')
                correctAnswerStreak++;
                if (correctAnswerStreak < 4) {
                    showCurrentQuestion();
                } else if(correctAnswer===4){
                resultElement.style.display='block';
                resultElement.textContent='Quiz completed';
                resultElement.style.color = "green";
                console.log('acabou')
                hideAllQuestions();
                }
              } else {
                correctAnswerStreak = 0;
                resul='wrong'
                hideAllQuestions();
                restart();
            }
        }
        showCurrentQuestion()