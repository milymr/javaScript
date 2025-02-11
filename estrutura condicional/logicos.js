//compra com desconto
let valor = 150
let clientevip = false 

if(valor > 100 || clientevip == true){
    console.log("Você ganhou frete gratis")
}else {
    console.log("Tem que pagar o frete ")
}

//número do intervalo
let num = 10
if(num >= 5 || num  <= 20){
    console.log("Funcionou")
}else {
    console.log("Não funcionou")
}

//Dirigir com carteira 
let idade = prompt ("Informe sua idade")
let carteira = true

if(idade >= 18 && carteira == true){
console.log("voce pode dirigir")
}else {
   console.log("voce nao pode dirigir")
}
    
//Elegível para promoção
let anos = prompt ("Informe os anos de trabalho")
let projetos = true

if(anos >= 5 || projetos > 10){
    console.log("Você está elegível para promoção")
}else {
   console.log("Você não está elegível para promoçaõ")
}

//Entrar em um evento
let id = prompt ("Qual sua idade?")
let id2 = true
if (id >= 18 && id2 > 30){
    console.log("Você pode entrar no evento")
}else {
    console.log("Você não pode entrar no evento")
}

//Seleção de funcionário
let id3 = prompt ("Nos diga sua idade")
let ex = prompt("Possui experiência?") 
if(id3 > 21 && ex == true){
    console.log("Você foi aceito para a vaga")
}else {
    console.log("Você não foi aceito para a vaga")
}

//verificação de login avançada
let nome = prompt ("Digite o nome de usuario")
let senha = prompt("Digite a sua senha")
if(nome == "admim" && senha == "1234"){
    console.log("Login bem-sucedido") 
}else {
    console.log("Nome de usuário ou senha incorretos")
}

//intervalo de valores 
let numero = prompt ("Diga um número que esteja entre 10 e 20 ou 30 e 50")
let numero2 = 20
let numero3 = 30 
let numero4 = 50
if (numero >= 10 && numero2 <= 20 && numero3 >= 30 && numero4 <= 50){
    console.log(" número está dentro do intervalo entre 10 e 20")
}else {
console.log("O número está dentro do intervalo entre 30 e 50")
} 



    

    
