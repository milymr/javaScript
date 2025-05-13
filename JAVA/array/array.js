let amigos = ["João", "Maria", "José", "Ana", "Pedro", "Elisa", "Carlos", "Camila", "Mariana", "Rodrigo"]

console.log(amigos[0])

for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}
console.log("adicionando ao fim da lista")
amigos.push("João")
amigos.shift()
console.log(amigos)
    
console.log("remova o último da lista")
amigos.pop()
console.log(amigos)

console.log("adicionando ao início da lista")
amigos.shift()
console.log(amigos)