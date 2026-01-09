//Operador ternário: forma curta de escrever um if|else para decidir entre dois valores com base em uma condição
const usuario = {
    nome: 'Igor',
    idade: 25,
    time: 'São Paulo'
};

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro';

usuario.time === 'São Paulo'
? console.log(mensagemDeBoasVindas1) // indica o que acontece se a condição for verdadeira
: console.log(mensagemDeBoasVindas2) // Indica o que acontece se a condição for falsa.

const mensagemdeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso';
const mensagemFinal = 'Divirta-se no Morumbi!';

console.log(mensagemdeEscolha);
console.log(mensagemFinal);