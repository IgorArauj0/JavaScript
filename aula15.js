//Objeto é uma estrutura que armazena informações em formato chave: valor.

// Criando um objeto chamado aluno
const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Sistemas de Informação"
};

// Exibe o objeto completo
console.log(aluno);

// Acessando uma propriedade específica
console.log(aluno.nome); // Carlos

// Outra forma de acessar
console.log(aluno["curso"]); // Sistemas de Informação


const aluno2 = {
    nome: "Ana",
    matricula: "2026001",
    ativo: true
};

if (aluno.ativo) {
    console.log(`Aluno ${aluno.nome} está com matrícula ativa.`);
}