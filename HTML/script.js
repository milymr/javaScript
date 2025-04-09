  //JAVASCRIPT
 let texto = document.getElementById("Texto")
 function mudarTexto(){
     texto.innerText = "Texto Alterado"
 }
 function mudarCor () {
 texto.style.color = "red" 
 document.body.style.backgroundColor = "blue" 
 }
 function trocarFundo (){
     let campo = document.getElementById ("campo")
     document.campo.style.backgroundColor = "yellow"
 }
 let imagem = document.getElementById("imagem")
 function troca(){
     imagem.src = ""
 }
 function destroca(){
     imagem.src = "gato.jpg"
 }
 let mensagem = document.getElementById("mensagem")
 function outroText(){
     mensagem.innerText = "Texto Alterado"
 }
 function voltaTexto (){
     mensagem.innerText = "Passe o mouse aqui"
 }
 function aparece() {
     let sumir = document.getElementById("sumir")
     if (sumir.style.display == "none"){
         sumir.style.display = "block"
     } else {
         sumir.style.display = "none"
     }
 }
 function aleatorio(){
     let tamanho = document.getElementById("tamanho")
     let novoTamanho = Math.floor(Math.random()* (40 - 10 + 1)) + 10 entre 10px e 40 px 
     tamanho.style.fonttSize = novoTamanho + "px"
 }
 