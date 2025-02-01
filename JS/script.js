// Seleciona todos os botões com a classe 'toggle-deck'
const buttons = document.querySelectorAll('.toggle-deck');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Seleciona o conteúdo do deck, que é o próximo elemento irmão do botão
    const deckContent = this.nextElementSibling;
    
    // Alterna a classe "open" para expandir ou recolher o conteúdo
    deckContent.classList.toggle('open');

    // Atualiza o texto do botão conforme o estado
    if (deckContent.classList.contains('open')) {
      this.textContent = 'Fechar Deck';
    } else {
      this.textContent = 'Ver Deck';
    }
  });
});
