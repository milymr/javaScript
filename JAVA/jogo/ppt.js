// Jogo pedra, papel, tesoura
// Variáveis para armazenar os pontos do jogafdor e pc
let placarJogador = 0
let placarPC = 0

//Variável para armazenar as rodadas 
let rodadasd = Number(prompt("Quantas vezes deseja jogar?"))

//Laço de repetição que fará as rodadas
for (let i = 0; i < rodadasd; i++) {


const escolhajogador = prompt("Escolha pedra, papel ou tesoura:")
// Solicita que o usuário informe qual ele quer 

const escolhaPC = ["pedra", "papel", "tesoura"]
[Math.floor(Math.random() * 3)]
// Gera uma escolha aleatoria para o computador
// Criamos um array com as opções e usamos o random para escolher uma de forma aleatoria
alert(`Você escolheu:  ${escolhajogador}`)
alert(`O COMPUTADOR escolheu:  ${escolhaPC}`)
// Mostrando qual foi a nossa escolha e qual foi a escolha o computador

// Compara se a nossa escolha foi a do computador
if (escolhajogador == escolhaPC) {
    alert("Empate")
} else if (escolhajogador == "pedra" && escolhaPC == "tesoura") { //criamos a primeira verificação de verificação
    alert("Você venceu")
    placarJogador++
} else if (escolhajogador == "tesoura" && escolhaPC == "papel") { //criamos a segunda verificação de verificação
    alert("Você venceu")
    placarJogador++
} else if (escolhajogador == "papel" && escolhaPC == "pedra") { //criamos a terceira verificação de verificação
    alert("Você venceu")
    placarJogador++
} else {
    alert("Você perdeu")
    placarPC++
}
    //Exibe o placar no console
    console.log("Placar jogador:", placarJogador)
    console.log("Placar computador: ", placarPC)

    
}
//placar final
    alert(`Fim de jogo! placar final: jogador  ${placarJogador} x ${placarPC} Computador`)
