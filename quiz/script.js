// cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
      pergunta: "Qual o nome da nossa escola?",
      opcoes: [
        "Luis Eulalio de Bueno Vidigal Filho",
        "Luis Eulalio",
        "Luis de Bueno",
        "Luis Eulalio de Vidigal"
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome do nosso curso?",
      opcoes: [
        "Analise e Desenvolvimento de Sistemas",
        "Sistemas de informação",
        "Desenvolvimento de sistemas",
        "Ciencia da Computação"
      ],
      correta: 2
    },
    {
      pergunta: "Em que ano foi fundado a nossa Escola?",
      opcoes: ["1999", "1942", "1985", "1970"],
      correta: 1
    }
  ]
  
  // Variáveis de controle
  let perguntaAtual = 0
  let pontuacao = 0
  let erros = 0
  let opcaoSelecionada = null
  
  // Elementos do DOM
  const pergunta = document.getElementById("pergunta")
  const opcoes = document.getElementById("opcoes")
  const botaoProxima = document.getElementById("proxima")
  const quiz = document.getElementById("quiz")
  const pontuacaoFinal = document.getElementById("pontuacao")
  const valorPontuacao = document.getElementById("valor-pontuacao")
  const botaoReiniciar = document.getElementById("reiniciar")
  const errosContador = document.getElementById("erros")
  const acertos = document.getElementById("acertos")
  
  // Atualiza o placar de acertos e erros
  function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
  }
  
  // Mostra a pergunta atual
  function mostrarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual] // CORRIGIDO
  
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" // limpa as opções anteriores
  
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
      const botao = document.createElement("button")
      botao.textContent = opcao
      botao.classList.add("opcao")
      botao.addEventListener("click", () => selecionarOpcao(indice))
      opcoes.appendChild(botao)
    })
  
    opcaoSelecionada = null
    botaoProxima.disabled = true
  }
  
  // Seleciona a opção
  function selecionarOpcao(indice) {
    opcaoSelecionada = indice
  
    const botoes = document.querySelectorAll(".opcao") // renomeado para evitar conflito
    botoes.forEach((opcao, i) => {
      opcao.classList.toggle("selecionada", i === indice)
    })
  
    botaoProxima.disabled = false
  }
  
  // Mostra a pontuação final
  function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
  }
  
  // Vai para a próxima pergunta
  botaoProxima.addEventListener("click", () => {
    if (opcaoSelecionada === perguntas[perguntaAtual].correta) {
      pontuacao++
    } else {
      erros++
    }
  
    atualizarPlacar()
    perguntaAtual++
  
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta()
    } else {
      mostrarPontuacao() // CORRIGIDO
    }
  })
  
  // Reinicia o quiz
  botaoReiniciar.addEventListener("click", () => {
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
  
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")
  
    atualizarPlacar()
    mostrarPergunta()
  })
  
  // Inicia com a primeira pergunta
  mostrarPergunta()
  