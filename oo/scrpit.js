//oo -> script.js
class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    apresentar () {
        console.log('ola, meu nome é ${this.name} e tenho ${this.idade} anos')
    }
}

const aluno1 = new Pessoa("juliana", 24)
//aluno1.apresentar();

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca 
        this.modelo = modelo 
        this.ano = ano
    }
    exibirInfo (){
        console.log(`Carro: ${this.marca} ${this.modelo}  ${this.ano}`)
    }
}

const meuCarro = new Carro ("Hyundai", "HB20", 2023)
//meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
    verificarAprovacao() {
        if (this.nota >= 6) {
            console.log(` ${this.nome} foi aprovado`)
        }else{
            console.log( `${this.nome} foi reprovado`)
        }
        }
}
const aluno = new Aluno('João', 7)
aluno.verificarAprovacao()
const aluno2 = new Aluno('Maria', 5)
aluno2.verificarAprovacao()

// Questão 1
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    mostrarDetalhes() {
        console.log(`Livro: "${this.titulo}" de ${this.autor}, com ${this.paginas} páginas.`);
    }
}

const livro = new Livro('Eu e esse meu coração', 'Collen Houver', 478);
livro.mostrarDetalhes();

// Questão 2
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    verSaldo() {
        console.log(`${this.titular} tem ${this.saldo} reais na conta.`);
    }
}

const conta = new ContaBancaria("Emily", 1000);
conta.verSaldo();
conta.depositar(200);
conta.verSaldo();
conta.sacar(100);
conta.verSaldo();

// Questão 3
class Pet {
    constructor(nome, especie, idade, som) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.som = som;
    }

    apresentar() {
        console.log(`${this.nome} é um(a) ${this.especie}, tem ${this.idade} anos e faz "${this.som}".`);
    }
}

const cachorro = new Pet("Mingual", "Cachorro", 5, "Au Au");
cachorro.apresentar();

const gato = new Pet("Mel", "Gato", 2, "Miau");
gato.apresentar();

// Questão 4
class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    assistir() {
        console.log(`Você começou a assistir "${this.titulo}".`);
    }

    exibirInfo() {
        console.log(`Você está assistindo "${this.titulo}", um filme de ${this.genero} que dura ${this.duracao} minutos.`);
    }
}

const filme = new Filme("Crepúsculo", "Romance, Ficção Científica", 136);
filme.assistir();
filme.exibirInfo();

// Questão 5
class Musica {
    constructor(nome, artista, tempo) {
        this.titulo = nome;
        this.autor = artista;
        this.tempo = tempo;
    }

    tocar() {
        console.log(`Tocando "${this.titulo}" de ${this.autor}, duração: ${this.tempo} minutos.`);
    }
}

const musica = new Musica("November Rain", "Guns N' Roses", 4.23);
musica.tocar();
