// Criação de um objeto chamado "usuario"
// Ele armazena informações sobre o usuário
const usuario = {
    nome: 'Igor',
    idade: 16,
    time: 'Flamengo'
};

//mensagem exibida caso o usuário seja maior de idade
//e torça para o São Paulo
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';

//mensagem exibida caso o usuário seja maior de idade
//e torça para o Flamengo
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';

const mensagemDeBoasVindasGeral = 'Bem vindo, amante do Esporte';


//Estrutura de decisão usando operador ternário encadeado
//Ele funciona como o if | else if | else
usuario.time === 'São Paulo' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas1) //Se for São Paulo e maior de 18
  : usuario.time === 'Flamengo' && usuario.idade >= 18
    ? console.log(mensagemDeBoasVindas2) //Se for Flamengo e maior de 18
    : usuario.idade >= 18
        ? console.log(mensagemDeBoasVindasGeral)//Se for maior de 18, independente do time
        : console.log('Não vendemos ingressos para torcedores menores de 18 anos');

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar o seu ingresso';

const mensagemFinal = 'Divirta-se no Maracanã';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);