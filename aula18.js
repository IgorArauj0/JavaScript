
// Manipulação de Strings no js

// Length - Retorna o tamanho da string
let mensagem = "BRASIL";
//console.log(mensagem.length); // Output: 6

//toUpperCase
//toLowerCase
//let nome = "BookDev";
//console.log(nome.toUpperCase());
//console.log(nome.toLowerCase());

//includes - Verifica se a string contém um determinado valor
//console.log(nome.includes("Dev"));
//console.log(nome.includes("dev"));


//replace - Substitui um valor por outro
let nome = "BookDev";
console.log(nome.replace("Dev", "Developer")); // Output: "BookDeveloper"

let frase = "gato e gato";
console.log(frase.replaceAll("gato", "cachorro")); // Output: "cachorro e gato"

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

