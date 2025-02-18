for (let contador = 0; contador <= 5; contador ++){
    console.log (contador)
} // usando o for 
// no while ficaria assim
let cont = 0
while(cont <= 5){
    console.log(cont)
    cont++
}
///////////////
for (let c = 5; c >= 0; c--){
    console.log(c)
}// podemos fazer de forma progressiva  
let numero = 4
for (let mult = 1; mult <= 5; mult ++){
    let resultado = numero * mult
    console.log(resultado)
}// tabuada com for

//questao 01 
for (let contar = 1; contar <= 30; contar ++){
    console.log(contar)
}
let contar = 0
while(contar <= 30){
    console.log(contar)
    contar++
}

//questao 02
for (let cnt = 30; cnt >= 0; cnt --){
    console.log(cnt)
}

//questao 03 
for (let i = 1; i <= 5; i++) {
    
    let numero = prompt(`Digite o número:`);

    
    if (numero >= 50) {
        console.log("ACIMA DA MÉDIA");
    } else {
        console.log("ABAIXO DA MÉDIA");
    }
}

//questao 04
let num = prompt("Digite um número para ver sua tabuada:");

for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(result);
}

//questao 06
for (let id = 1; id <= 10; id++) {
    
    let id = prompt(`Digite o número:`);

    
    if (id >= 18) {
        console.log("maior de idade");
    } else {
        console.log("menor de idade");
    }
}

//questao 07
let voto = prompt("Digite seu voto (1-6): ")
for (let voto = 0; voto < 5; voto++) {
    let voto = parseInt(prompt("Digite seu voto (1-6): "))
    switch (voto) {
        case 1:
            console.log("Voto para o candidato 1")
            break
        case 2:
            console.log("Voto para o candidato 2")
            break
        case 3:
            console.log("Voto para o candidato 3")
            break
        case 4:
            console.log("Voto para o candidato 4")
            break
        case 5:
            console.log("Voto nulo")
            break
        case 6:
            console.log("Voto em branco")
            break
        default:
            console.log("Voto inválido")
            break
    }
}