// Obtém os elementos do DOM
const keyImage = document.getElementById('key-image');
const doorImage = document.getElementById('door-image');
const inventory = document.getElementById('inventory');
const messageContainer = document.getElementById('message-container');
const messageText = document.getElementById('message-text');

// Variável para controlar se a chave foi coletada
let hasKey = false;

// Função para exibir uma mensagem no centro da tela
function showMessage(message) {
  messageText.textContent = message;
  messageContainer.style.display = 'block';

  // Após 3 segundos, oculta a mensagem
  setTimeout(() => {
    messageContainer.style.display = 'none';
  }, 3000);
}

// Manipulador de eventos para a imagem da chave
keyImage.addEventListener('click', () => {
  if (!hasKey) {
    hasKey = true;
    keyImage.style.display = 'none';
    inventory.innerHTML = '<img src="key.png" alt="Key">';
  }
});

// Manipulador de eventos para a imagem da porta
doorImage.addEventListener('click', () => {
  if (hasKey) {
    showMessage('Parabéns! Você escapou!');
  } else {
    showMessage('Você precisa encontrar a chave antes de escapar.');
  }
});