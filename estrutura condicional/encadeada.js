// Número positivo, negativo ou zero
let numero = prompt ("Escolha um número:")
if(numero > 0) {
    console.log("positivo")
} else if (numero < 0 ) {
   console.log("Negativo")
} else {
    console.log("Zero")
}
console.log("-----------------------------------")
let nota = Number(prompt("Qual a nota?"))
if(nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7 ) {
    console.log ("Bom")
} else if (nota >= 5) {
    console.log("Regular")
} else {
    console.log("Ruim")
}
console.log("-----------------------------------")
//questao 01
let idade = prompt ("Informe sua idade:")
if(idade <= 12) {
    console.log("criança")
} else if (idade <= 17) {
    console.log("Adolescente")
} else if (idade <= 59) {
    console.log("Adulto")
}else if (idade >= 60) {
    console.log("Idoso")
}
console.log("-----------------------------------")
//questao 02
let grau = prompt ("informe a temperatura")
if(grau < 10) {
    console.log("muito frio")
} else if ( grau < 20) {
    console.log("frio")
} else if (grau < 30) {
    console.log("Agradavel")
}else if (grau >= 30) {
    console.log("muito quente")
}
console.log("-----------------------------------")
//questao 03
let turno = prompt ("Informe a string representando o turno de estudo")
if(turno == "M") {
    console.log("Bom dia!(matutino)")
} else if (turno == "V" ) {
    console.log("Boa tarde! (vespertino)")
} else if (turno == "N") {
    console.log ("Boa noite! (nourno)")
} 
console.log("-----------------------------------")
//questao 04 
let valor = Number(prompt ("informe o valor da compra"))
if(valor <= 100) {
    console.log("Você ganhou 5% de desconto")
}else if (valor <= 200) {
    console.log ("Você ganhou de 10% Desconto")
}else if (valor > 200) {
    console.log ("você ganhou 15% de desconto")
}
console.log("-----------------------------------")
//questao 05 
let notas = prompt ("Nos informe sua nota")
if (notas > 90){
    console.log("A")
} else if (notas > 80) {
    console.log("B")
}else if (notas > 70) {
    console.log("C")
}else if (notas > 60){
    console.log("D")
}else if (notas < 60){
    console.log("F")
}
console.log("-----------------------------------")
//questao 06
let num = prompt ("Coloque um número de 1 a 7")
if(num == 1){
    console.log("Domingo")
}else if (num == 2){
    console.log("Segunda-Feira")
}else if (num == 3){
    console.log ("Terça-Feira")
}else if (num == 4){
    console.log("Quarta-Feira")
}else if (num == 5){
    console.log("Quinta-Feira")
}else if (num == 6){
   console.log ("Sexta-Feira")
}else if (num == 7){
    console.log("Sábado")
}
console.log("-----------------------------------")
//questao 07
let distancia = prompt ("Infome a distância")
if(distancia < 400){
    console.log("Pista curta")
    }else if (distancia < 800){
        console.log("Pista média")
        }else if (distancia < 1500){
            console.log("Pista longa")
        }else if (distancia > 1500){
            console.log("Pista muito longa")
             } 


console.log("---------------------------------")                         
//questao 08
 let pontuacao = prompt ("coloque sua pontuação")
 if (pontuacao < 1000){
    console.log("iniciante")
 } else if (pontuacao < 5000){
    console.log("Intermediário")
 }else if (pontuacao < 10000){
    console.log("Avançado")
 } else if (pontuacao > 10000){
    console.log("Mestre")
 }
    
