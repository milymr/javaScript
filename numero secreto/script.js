 let numeroSecreto;
    let tentativas;
    let historico;

    function iniciarJogo() {
      numeroSecreto = Math.floor(Math.random() * 100) + 1;
      tentativas = 0;
      historico = [];
      document.getElementById('mensagem').textContent = '';
      document.getElementById('tentativasRestantes').textContent = '';
      document.getElementById('historico').innerHTML = '';
      document.getElementById('palpite').disabled = false;
      document.getElementById('tentar').disabled = false;
      document.getElementById('palpite').value = '';
    }

    function verificarPalpite() {
      const palpiteInput = document.getElementById('palpite');
      const valor = Number(palpiteInput.value);

      if (valor < 1 || valor > 100) {
        alert("Por favor, digite um número entre 1 e 100.");
        return;
      }

      tentativas++;
      historico.push(valor);

      if (valor === numeroSecreto) {
        document.getElementById('mensagem').textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`;
        fimDeJogo();
      } else if (tentativas >= 10) {
        document.getElementById('mensagem').textContent = `Fim de jogo! O número era ${numeroSecreto}.`;
        fimDeJogo();
      } else {
        const dica = valor < numeroSecreto ? "maior" : "menor";
        document.getElementById('mensagem').textContent = `Errou! O número secreto é ${dica}.`;
        document.getElementById('tentativasRestantes').textContent = `Tentativas restantes: ${10 - tentativas}`;
      }

      atualizarHistorico();
      palpiteInput.value = '';
      palpiteInput.focus();
    }

    function fimDeJogo() {
      document.getElementById('palpite').disabled = true;
      document.getElementById('tentar').disabled = true;
    }

    function atualizarHistorico() {
      document.getElementById('historico').innerHTML = 
        `<strong>Histórico:</strong> ${historico.join(', ')}`;
    }

    document.getElementById('tentar').addEventListener('click', verificarPalpite);
    document.getElementById('reiniciar').addEventListener('click', iniciarJogo);

    // Inicia o jogo automaticamente ao carregar
    window.onload = iniciarJogo;