let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const entradaTarefa = document.getElementById("entradaTarefa")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const listarTarefas = document.getElementById("listarTarefas")

// Exibir Tarefas

// Adicionar Tarefas
// Adicionar Tarefas
botaoAdicionar.addEventListener("click", () => {
    const texto = entradaTarefa.value
    if (texto !== "") {
      tarefas.push({ texto: texto, feita: false })
      salvarTarefas()
      exibirTarefas()
      entradaTarefa.value = ""; // Limpar o campo de entrada
    }
  })
  
  exibirTarefas()