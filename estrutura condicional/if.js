//Estrutura condicional - if else 

let idade = prompt("Qual sua idade?")
console.log("Sua idade é", idade)
if (idade > 18) {
    console.log("é maior que 18")
} else {
    console.log("Você é menor de idade")
}
console.log("---------------------------------------")
//verificando se um número é impar ou par 
let numero = prompt ("Escolhe um número:")
let resultado = numero % 2 // resto
if(resultado == 0 ) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("--------------------------------------")
//avaliação aluno 
let nota1 = prompt ("Qual a primeira nota:")
let nota2 = prompt ("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7) {
    console.log("aprovado")

} else {
    console.log("reprovado")
}
console.log("--------------------------------------")
//questao 4
 
let id = prompt ("informe sua idade")
if (id >= 18) {
    console.log("entrada permitida")
} else {
    console.log("Entrada negada")
}
console.log("--------------------------------------")
//questao 5

let senha = prompt("insira a senha")
if (senha == 1234) {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta")
}
console.log("--------------------------------------")
//questao 6

let temp = prompt ("informe a temperatura")
if (temp >= 30) {
    console.log("Está quente")
} else {
    console.log("Está frio")
}
console.log("--------------------------------------")
//questao 7
let num = prompt ("Escreva um número")
if (num >= 0 ) {
    console.log("Número positivo")
} else {
    console.log("Número negativo")
}
