//Parâmetros e Retorno Avançado em Funções
//Objetivo
//Aprofundar o entendimento de como funções recebem dados e devolvem resultados.

// Função que calcula média de duas notas
function calcularMedia(nota1, nota2) {

    // Soma as notas
    let soma = nota1 + nota2;

    // Divide por 2
    let media = soma / 2;

    // Retorna o resultado
    return media;
}

// Chamando a função
let resultado = calcularMedia(7, 9);

console.log("Média final:", resultado);