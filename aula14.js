// Criação de um objeto chamado "usuario"
// Ele armazena informações sobre o usuário
const usuario = {
    nome: 'Igor',
    idade: 18,
    time: 'São Paulo'
};

//mensagem exibida caso o usuário seja maior de idade
//e torça para o São Paulo
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';

//mensagem exibida caso o usuário seja maior de idade
//e torça para o Flamengo
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';

const mensagemDeBoasVindasGeral = 'Bem vindo, amante do Esporte';

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar o seu ingresso';

const mensagemFinal = 'Divirta-se no Maracanã';

usuario.idade < 18 
? console.log('Não vendemos ingressos para menores de 18 anos')
: (
    usuario.time === 'São Paulo'
    ? console.log(mensagemDeBoasVindas1)
    : usuario.time === 'Flamengo'
      ? console.log(mensagemDeBoasVindas2)
      :console.log(mensagemDeBoasVindasGeral),

      console.log(mensagemDeEscolha),
      console.log(mensagemFinal)
);
