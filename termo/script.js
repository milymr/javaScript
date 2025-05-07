const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")

// Definindo as letras de cada linha
const teclasLinha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const teclasLinha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"]
const teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M"]

// Define o número de tentativas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

// Variáveis de controle da posição do jogador
let linhaAtual = 0
let colunaAtual = 0

// Define as palavras que podem ser escolhidas
const palavrasSecretas = ["Senai", "livro", "plano", "norte", "trevo"]
let mapaPalavra = {}
let palavraSecreta = palavrasSecretas[Math.floor(Math.random() . palavrasSecretas.length)].toUpperCase()

for (let i = 0; i < palavraSecreta.length; i++) {
    mapaPalavra[palavraSecreta[i]] = i
}

// Matriz onde as tentativas serão armazenadas
const palpites = []

// Cria as linhas
for (let l = 0; l < linhas; l++) {
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" + l)
    linhasLetras.setAttribute("class", "linha-letras")

    // Cria as colunas
    for (let c = 0; c < colunas; c++) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha" + l + "coluna" + c)
        colunaLetra.setAttribute("class", l == 0 ? "coluna-letra digitando" : "coluna-letra")
        linhasLetras.append(colunaLetra)
        palpites[l][c] = "" // inicia vazio
    }

    // Adiciona a linha criada ao site
    letras.append(linhasLetras)
}

// Verifica se a palavra digitada está correta
function verificarPalpite() {
    const palpite = palpites[linhaAtual].join("")
    if (palpite.length !== colunas) {
        return // se o palpite estiver incompleto, não verifica
    }

    const colunaAtuais = document.querySelectorAll(".digitando")
    for (let i = 0; i < colunas; i++) {
        const letra = palpite[i]

        if (mapaPalavra[letra] === undefined) {
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] === i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            colunaAtuais[i].classList.add("deslocada")
        }
    }

    if (palpite === palavraSecreta) {
        window.alert("Acertou! Parabéns")
    } else if (linhaAtual === linhas - 1) {
        window.alert("Errou! A palavra era: " + palavraSecreta)
    } else {
        moverParaProximaLinha()
    }
}

// Função para passar para a próxima linha
function moverParaProximaLinha() {
    const colunaDigitando = document.querySelectorAll(".digitando")
    colunaDigitando.forEach(col => {
        col.classList.remove("digitando")
    })
    linhaAtual += 1
    colunaAtual = 0

    const novaLinha = document.querySelector("#linha" + linhaAtual)
    const novaColunas = novaLinha.querySelectorAll(".coluna-letra")
    novaColunas.forEach(col => {
        col.classList.add("digitando")
    })
}

// Função que insere uma letra no palpite ao clicar na tela
function clicarTela(tecla) {
    if (colunaAtual === colunas) {
        return
    }
    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letraAtual.textContent = tecla
    palpites[linhaAtual][colunaAtual] = tecla
    colunaAtual += 1
}

// Função para criar as linhas do teclado
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)
        botao.addEventListener("click", () => clicarTela(tecla))
        container.append(botao)
    })
}

// Cria as três linhas do teclado
criarLinhaTeclado(teclasLinha1, linhaTeclado1)
criarLinhaTeclado(teclasLinha2, linhaTeclado2)
criarLinhaTeclado(teclasLinha3, linhaTeclado3)


// Função para apagar a última letra digitada
function apagarLetra() {
    if (colunaAtual == 0) {
        // Se tiver no primeiro bloquinho da linha, não vai apagar nada
        return
    }
    colunaAtual -= 1
    palpites[linhaAtual][colunaAtual] = "" // remove a letra
    const letra = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letra.textContent = ""
}

// Cria o botão de apagar "<"
const botaoApagar = document.createElement("button")
botaoApagar.textContent = "<"
botaoApagar.addEventListener("click", apagarLetra) // quando clica apaga
linhaBackspaceEnter.append(botaoApagar) // adiciona na tela

// Cria o botão do Enter
const botaoEnter = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", verificarPalpite) // quando clica verifica
linhaBackspaceEnter.append(botaoEnter) // adiciona na tela

// Permite digitação pelo teclado físico
document.onkeydown = function(evt) {
    evt = evt || window.event
    if (evt.key == "Enter") {
        verificarPalpite()
    } else if (evt.key == "Backspace") {
        apagarLetra()
    } else {
        clicarTela(evt.key.toUpperCase())
    }
}
