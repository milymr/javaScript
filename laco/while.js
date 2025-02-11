let contador = 0 
//inicia a contagem em zero
while(contador <= 5) {
    //continua enquanto a condição for verdade 
    console.log(contador) //mostra o num atual 
    contador ++ // atualiza o valor do contador 
}
////////////////////////
console.log("segunda exemplo")
let controle = 5
while(controle >= 0){
    console.log(controle)
    controle --
//podemos fazer ele contar de forma regressiva
}
//////////////////////////
console.log("terceiro exemplo")
let numero = 3
let multiplicador = 1
while (multiplicador <= 4) {
    let resultado = numero  * multiplicador 
    console.log(numero, "x", multiplicador, "=", resultado)//assim fica mais bonito multiplicador += 1 //outra opção para o ++

    multiplicador ++
}
//////////////////////////
let palavra = prompt ("Digite a palavra")
while (palavra != "oi") {
    palavra = prompt ("Tente novamente: ")
    if (palavra == "oi"){
--        console.log("Acertou")
    }
}

//questão 01
let contado = 1
while(contado <= 10) {
    console.log(contado)
    contado ++
}

//questao 03
let contagem = 10
while (contagem >= 1 ){
    console.log(contagem)
    contagem --
}
//questao 02 
let num = prompt ("Digite um numero")
let multi = 1
while(multi <= 10){
    let resultado = num * multi
    console.log(num, "x", multi, "=", resultado) 
    multi ++
}

//questao 04 
let senha = prompt ("Digite a senha")
while(senha != 12345){
    senha = prompt ("Tente novamente")
    if (senha == 12345){
console.log("Senha correta") 
    }
    

}

//questao 05
let contar = 50
while(contar <= 100){
    console.log(contar)
    contar++
}

//questao 06
let sequencia = 5 
while(sequencia <= 100){
    console.log(sequencia)
    sequencia += 5
}

//questao 07
let mensagem = 0
while(mensagem < 5){
    console.log("Eu gosto de JavaScript")

mensagem ++
}
 //questao 08
let nome = prompt("Diga seu nome")
let nume = prompt ("escolha a quantidade de numero")
while(nume > 0) {
    console.log(nome)
    nume --
}
