//let contador = 0
//while(contador != 5) {
    //verifica primeiro, executa depois
   // console.log("while:", contador)
   // contador ++
//}
//do { //executa primeiro, verifica depois
    //console.log("do while", contador1)
    //contador1++
//}while (contador1 != 5)

//segundo exemplo
//let numero = 5
//do {
    //console.log(numero)
    //numero --
//}while(contador >= 0) 

    //terceiro exemplo
    //let idade = prompt ("Qual a sua idade?")
    //do {
    //    if (idade > 0){
     //       console.log("idade inválida")
      //  }
      //  idade = prompt ("Qual sua idade?")
    //}while (idade >= 0)

    //Questao 01

    let numero = 1
    while (numero <= 20){
        console.log(numero)
        numero ++
    }

    //questao 02 
    let usuario = prompt("O usuário deseja continuar?")
    do {
        if (usuario != "s"){
            console.log("tente novamente")
        }
        usuario = prompt ("O usuario deseja continuar?")
    }while (usuario != "n")

//questao 03
let numerofinal = prompt("digite o número final para a sequência")
let sequencia = 1
do {
    
        console.log(sequencia)
        sequencia ++
    }while (sequencia <= numerofinal)


//questao 04
let cont = 1
do {
    console.log(cont)
    cont += 2
}while (cont <= 31)

//questao 5
let num = 0
do {
    let numero = prompt("Digite um número:")
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    num++
} while (num < 5)

    //questao 6
    let continuar = 's'
do {
    let numero1 = prompt("Digite o primeiro número:")
    let numero2 = prompt("Digite o segundo número:")
    let soma = Number(numero1) + Number(numero2)
    console.log("A soma é:", soma)
    continuar = prompt("Você deseja fazer outra conta? (s para continuar)")
} while (continuar === 's')