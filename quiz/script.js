// cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
      pergunta: "Quem foi o responsável pela teoria da separação dos poderes?",
      opcoes: [
        "Karl Marx",
        "Montesquieu",
        "Maquiavel",
        "Jean-Jacques Rousseau"
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi o principal motivo da Revolução Francesa?",
      opcoes: [
        "A invasão da Alemanha",
        "A crise financeira e social do Antigo Regime",
        "A descoberta da América",
        "A Guerra dos Cem Anos"
      ],
      correta: 1
    },
    {
      pergunta: "O que marcou o início da Idade Moderna?",
      opcoes: [
        "A queda de Constantinopla",
        "A Revolução Francesa",
        "O Renascimento Cultural",
        "A Primeira Guerra Mundial"
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o principal objetivo da colonização portuguesa no Brasil?",
      opcoes: [
        "Construir universidades",
        "Explorar riquezas naturais e gerar lucro",
        "Espalhar o idioma português",
        "Fundar cidades modernas"
      ],
      correta: 1
    },
    {
      pergunta: "O que foi a Guerra Fria?",
      opcoes: [
        "Um conflito armado entre EUA e URSS",
        "Uma disputa política, econômica e ideológica entre EUA e URSS",
        "A guerra entre Coreia do Sul e Coreia do Norte",
        "A Segunda Guerra Mundial"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o sistema de governo em que o poder está nas mãos do povo?",
      opcoes: [
        "Monarquia",
        "Ditadura",
        "Democracia",
        "Teocracia"
      ],
      correta: 2
    },
    {
      pergunta: "Quem escreveu 'O Príncipe' e é considerado o pai da ciência política moderna?",
      opcoes: [
        "Platão",
        "Aristóteles",
        "Maquiavel",
        "Santo Agostinho"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal característica da globalização?",
      opcoes: [
        "Fechamento das fronteiras",
        "Isolamento dos países",
        "Maior interdependência entre as nações",
        "Extinção das línguas locais"
      ],
      correta: 2
    },
    {
      pergunta: "O que é cultura, segundo a antropologia?",
      opcoes: [
        "Apenas as manifestações artísticas",
        "Tudo que é feito pelo ser humano em sociedade",
        "Somente as tradições religiosas",
        "A culinária de um povo"
      ],
      correta: 1
    },
    {
      pergunta: "O que foi o Iluminismo?",
      opcoes: [
        "Um movimento artístico da Idade Média",
        "Uma filosofia que valorizava a razão e criticava o absolutismo",
        "Um tratado de paz entre países europeus",
        "Uma doutrina religiosa"
      ],
      correta: 1
    }
  ];
  
  
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
  