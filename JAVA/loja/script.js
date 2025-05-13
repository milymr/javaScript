const listaProdutos = [
    {id: 1, nome: "kit maquiagen", preco: 178, imagem: "img/produto04.webp"},
    {id: 2, nome: "Gloss de mel", preco: 70, imagem: "img/produto1.jpg"},
    {id: 3, nome: "blush", preco: 128, imagem: "img/produto02.webp"},
    {id: 4, nome: "gloss kiko", preco: 89, imagem: "img/produto03.jpg"}
  ];
  //pegando elementos do html
  // Elementos do DOM
const containerProdutos = document.getElementById("produtos");
const barraPesquisa = document.getElementById("barraPesquisa");
const listaCarrinho = document.getElementById("listaCarrinho");
const botaoCarrinho = document.getElementById("botaoCarrinho");
const botaoLoja = document.getElementById("botaoLoja");
const divCarrinho = document.getElementById("carrinho");
const totalCarrinho = document.getElementById("totalCarrinho");

// Carrinho de compras
let carrinho = [];

// Função para exibir produtos
function mostrarProdutos(lista) {
  containerProdutos.innerHTML = "";
  lista.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    containerProdutos.appendChild(card);
  });
}

// Adicionar ao carrinho
function adicionarCarrinho(idProduto) {
  const produtoSelecionado = listaProdutos.find(prod => prod.id === idProduto);
  const itemExistente = carrinho.find(item => item.id === idProduto);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produtoSelecionado, quantidade: 1 });
  }

  atualizarCarrinho();
}

// Diminuir a quantidade
function diminuirQuantidade(idProduto) {
  const itemExistente = carrinho.find(item => item.id === idProduto);

  if (itemExistente) {
    itemExistente.quantidade -= 1;
    if (itemExistente.quantidade <= 0) {
      removerDoCarrinho(idProduto);
      return;
    }
    atualizarCarrinho();
  }
}

// Remover do carrinho
function removerDoCarrinho(idProduto) {
  carrinho = carrinho.filter(item => item.id !== idProduto);
  atualizarCarrinho();
}

// Atualizar o carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nome}</span>
      <span>${item.quantidade}</span>
      <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
      <span>
        <button class="aumentar" onclick="adicionarCarrinho(${item.id})">+</button>
        <button class="diminuir" onclick="diminuirQuantidade(${item.id})">-</button>
        <button class="remover" onclick="removerDoCarrinho(${item.id})">Remover</button>
      </span>
    `;
    listaCarrinho.appendChild(li);
  });

  calcularTotal();
}

// Calcular total do carrinho
function calcularTotal() {
  const total = carrinho.reduce((soma, item) => {
    return soma + item.preco * item.quantidade;
  }, 0);

  totalCarrinho.innerText = `Total: R$ ${total}, 00</strong>`;
}
// Barra de Pesquisa
barraPesquisa.addEventListener("input", () => {
  const textoPesquisa = barraPesquisa.value.toLowerCase();
  const produtosFiltrados = listaProdutos.filter(produto =>
    produto.nome.toLowerCase().includes(textoPesquisa)
  );
  mostrarProdutos(produtosFiltrados);
});

// Botão Ver Carrinho
botaoCarrinho.addEventListener("click", () => {
  containerProdutos.style.display = "none";
  barraPesquisa.style.display = "none";
  divCarrinho.style.display = "block";
  botaoCarrinho.style.display = "none";
  botaoLoja.style.display = "inline";
});

//Botão voltar para a loja
botaoLoja.addEventListener("click", () => {
  containerProdutos.style.display = "flex"
  barraPesquisa.style.display = "block"
  divCarrinho.style.display= "block"
  botaoCarrinho.style.display -"inline"
  botaoLoja.style.display="none"
})
//inicialização
mostrarProdutos(listaProdutos)
