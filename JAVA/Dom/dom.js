// Alteração da imagem ao passar o mouse
let imagem = document.getElementById("imagem");

imagem.addEventListener("mouseover", function () {
    // Alterna entre duas imagens
    if (imagem.getAttribute("src") === "gatu1.webp") {
        imagem.setAttribute("src", "gatu2.avif");
    } else {
        imagem.setAttribute("src", "gatu1.webp");
    }
});

// Manipulação da lista de itens
let lista = document.getElementById("lista");
let adicionar = document.getElementById("adicionar");
let remover = document.getElementById("remover");

// Adiciona um novo item à lista
adicionar.addEventListener("click", function () {
    let novoItem = document.createElement("li");
    novoItem.innerText = "Novo item";
    lista.appendChild(novoItem);
});

// Remove o último item da lista
remover.addEventListener("click", function () {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});
 
let oi = document.getElementById("oi")
oi.addEventListener("click", function (){
    if(oi.style.backgroundColor == "red") {
        oi.style.backgroundColor = "blue"
    }else {
        oi.style.background = "red"
    }
})

//questao 02
