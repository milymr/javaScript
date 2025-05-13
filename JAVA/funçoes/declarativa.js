//sem parametro
function mostrarMensagem() {
    console.log("olá")
}

mostrarMensagem () //usamos isso para chamar a função

function contarAteTres () {
    for(let i = 1; i <= 3; i++){
        console.log(i)
    }
}
contarAteTres()

//com parametro 
function somar (a,b) {
    let resultado = a + b 
    return resultado 
}
console.log(somar(3,7))
console.log(somar(10,3))
console.log(somar(8,125))

function aoQuadrado(numero){
    let quadrado = numero * numero
    return quadrado
}
console.log(aoQuadrado(5))
console.log(aoQuadrado(8))
console.log(aoQuadrado(251))

//questao 01
function mostrarMensagem (){
    console.log("Eu gosto de java script")

}
//////////////////////////////////
//questao 02
function contarAteCinco (){
    for(let i = 1; i <= 5; i++){
        console.log(i)
    }
}
contarAteCinco ()
///////////////////////////////
//questao 03
function saudacao() {
    
    let nome = prompt("Digite seu nome:");
    console.log("Olá, " + nome + "! Seja bem-vindo(a)!");
  }
  
saudacao();
////////////////////////////////
//questao 04
function multiplicarDoisNumeros (numero){
    let resultado = numero * numero
    return resultado
}
console.log(multiplicarDoisNumeros(5 ))
console.log(multiplicarDoisNumeros(3))
 ///////////////////////////////////
//questao 05 
function verificarIdade(idade) {
    let id = prompt ("Qual sua idade?");
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}


verificarIdade();
////////////////////////////////////
//questao 06
let numero1 = Number(prompt ("Digite um número"));
let numero2 = Number (prompt ("Digite outro número"));
function somar(numero1, numero2){
    
    let resultado = numero1 + numero2 
    return resultado
}
console.log(somar(numero1, numero2)) 
///////////////////////////////////////////
//questao 07
let area = Number(prompt ("Digite a area"));
let altura = Number(prompt("Digite a altura"));
function calcularAreaRetangulo(area, altura){
    let resultado = area * altura 
    return resultado
}
console.log(calcularAreaRetangulo(area, altura))

//questao 08
function compararIdade(idade) {
    let idade1 = prompt ("Qual sua idade?");
    let idade2 = prompt ("Escreva outra idade");ElementInternals
    if (idade1 > idade2) {
        console.log("A primera pessoa é mais velha");
    } else {
        console.log("a segunda pessoa é mais velha");
    }
}
console.log(compararIdade(idade1, idade2))

