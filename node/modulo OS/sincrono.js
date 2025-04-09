function tarefaDemorada (){
    const agora = new Date ();
    const futuro = agora.getTime() + 3000 //adiciona 3 segundos 
    while (new Date().geteTime < futuro) {}

}

console.log("iniciando o programa...")
console.log("executando tarefa 1")
tarefaDemorada( ) // simula um processo que leva 3 segundos 
console.log("tarfefa 1 concluída ")

console.log("executando tarfea 2 ")
tarefaDemorada () //simula outro processo  que leva 3 segundos
console.log("tarefa 2 concluída")
console.log ("programa finalizado")