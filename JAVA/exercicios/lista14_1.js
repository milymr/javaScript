// Exercicio 1

document.getElementById('btnTexto').addEventListener('click', function() {
    var paragrafo = document.getElementById('paragrafo1');
    paragrafo.style.color = paragrafo.style.color === 'red' ? 'black' : 'red';
});

// Exercicio 2 

document.getElementById('btnMudarCor').addEventListener('click', function() {
    var botao = document.getElementById('btnMudarCor');
    botao.style.backgroundColor = botao.style.backgroundColor === 'blue' ? 'green' : 'blue';
});

// Exercicio 3 

document.getElementById('paragrafo2').addEventListener('dblclick', function() {
    this.style.fontSize = '24px';
});

// Exercicio 4 

document.getElementById('blocoTexto').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});

document.getElementById('blocoTexto').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'transparent';
});

// Exercicio 5 

document.getElementById('btnAumentarImg').addEventListener('click', function() {
    var img = document.getElementById('imagem');
    img.style.width = '200px';
    img.style.height = '200px';
});

// Exercicio 6 

document.getElementById('btnArredondarImg').addEventListener('click', function() {
    document.getElementById('imagem').style.borderRadius = '50%';
});

// Exercicio 7 

document.getElementById('btnParagrafo1').addEventListener('click', function() {
    var p = document.getElementById('paragrafoA');
    p.style.backgroundColor = 'yellow';
    p.style.color = 'blue';
});

document.getElementById('btnParagrafo2').addEventListener('click', function() {
    var p = document.getElementById('paragrafoB');
    p.style.backgroundColor = 'gray';
    p.style.color = 'white';
    p.style.fontSize = '20px';
});

document.getElementById('btnParagrafo3').addEventListener('click', function() {
    var p = document.getElementById('paragrafoC');
    p.style.backgroundColor = 'black';
    p.style.color = 'red';
    p.style.fontSize = '22px';
    p.style.borderRadius = '10px';
});