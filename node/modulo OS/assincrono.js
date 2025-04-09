
function tarefaDemorada(nome, tempo){
    setTimeout(() => {
        console.log(`tarefa ${nome} concluida`)
    }, tempo)

    
}

console.log("iniciando o programa")
console.log("executando a tarefa 1")
tarefaDemorada(1, 300) //tarefa 1 vai demorar 3 segundos, mas não vai travar o código 

console.log("executando tarefa 2")
tarefaDemorada(2, 3000) // tarefa 2 também vai demorar 3 segundos e vai iniciarlogo depois da primeira 
console.log("programa finalizado (")