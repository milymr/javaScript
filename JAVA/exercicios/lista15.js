// Exercicio 1
function mostrarnumero(){
    let numero = document.getElementById("numero").value
    let resultado1 = document.getElementById("resultado1")
    let resultado2 = document.getElementById("resultado2")
    let resultado3 = document.getElementById("resultado3")

    console.log(Math.round(numero))
    console.log(Math.floor(numero))
    console.log(Math.ceil(numero))

    resultado1.innerText = "Arredondamento: " + Math.round(numero)
    resultado2.innerText = "Teto: " +  Math.floor(numero)
    resultado3.innerText = "Piso: " + Math.ceil(numero)
}

// Exercicio 2
function mostrarnome(){
    let text = document.getElementById("text").value
    let text1 = document.getElementById("text1")
    let text2 = document.getElementById("text2")

    console.log(text.toUpperCase())
    console.log(text.toLowerCase())

    text1.innerText = "Maiúscula: " + text.toUpperCase()
    text2.innerText = "Minúscula: " + text.toLowerCase()
}

// Exercicio 3
function mostraraleatorio(){
    let ale = document.getElementById("ale")

    console.log(Math.random() * 100)
    ale.innerText = (Math.random() * 100)
}

// Exercicio 4
function mostrarnum (){
    let num = document.getElementById("num").value
    let resultado = document.getElementById("resultado")

    console.log(Number(num).toFixed(2))
    resultado.innerText = Number(num).toFixed(2)
}

// Exercicio 5
function mostrartexto (){
    let texto = document.getElementById("texto").value
    let mudar = document.getElementById("mudar").value
    let nova = document.getElementById("nova").value
    let resul = document.getElementById("resul")

    console.log(texto.replace(mudar, nova))
    resul.innerText = texto.replace(mudar, nova)
}

// Exercicio 6
function verificarnumero (){
    let senumero = document.getElementById("senumero").value
    let result = document.getElementById("result")

    console.log(isNaN(senumero))
    result.innerText = isNaN(senumero)
}

// Exercicio 7
function mostrarposicao(){
    let palavra = document.getElementById("palavra").value
    let numbe = document.getElementById("numbe").value
    let resulta = document.getElementById("resulta")

    console.log(palavra.charAt(numbe))
    resulta.innerText = palavra.charAt(numbe)
}

// Exercicio 8
function juntarnomesobre (){
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let juntar = document.getElementById("juntar")

    juntar.innerText = nome + " " + sobrenome
}

// Exercicio 9
function somarnumeros (){
    let nume1 = parseFloat(document.getElementById("nume1").value);
    let nume2 = parseFloat(document.getElementById("nume2").value);
    let somar1 = document.getElementById("somar1")

    let somar = nume1 + nume2
    somar1.innerText = somar
}

// Exercicio 10
function verificaridade(){
    let idade = document.getElementById("idade").value
    let verific = document.getElementById("verific")

    if(idade >= 18){
        verific.innerText = "Pode dirigir"
    } else {
        verific.innerText = "Não pode dirigir"
    }
}