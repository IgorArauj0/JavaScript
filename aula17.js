//Escopo de Variáveis (Global e Local)
//Por que é fundamental?
//Aqui começa a entender comportamento real do código.

//Escopo de Variáveis (Global e Local)
//  Por que é fundamental?
//Aqui começa a entender comportamento real do código.

let nome = "Igor"; // Variável global

function saudacao() {
    let mensagem = "Bem-vindo"; // Variável local
    console.log(mensagem);
    console.log(nome); // Pode acessar global
}

saudacao();

// console.log(mensagem); Erro (fora da função)