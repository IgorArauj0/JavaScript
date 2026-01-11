//Valor inicial do contador
let contador = 0;

//Seleciona o parágrafo que exibe o valor na tela no HTML
const valorContador = document.querySelector('#valor-contador');

//Função usada para aumentar o contador
function aumentar() {
    contador++; //Incrementando\aumentando\somando um valor a mais
    valorContador.innerText = contador; //InnerText atualiza o valor na tela, ele vai alterar o texto exibido dentro do elemento HTML
}

function diminuir() {
    contador--; //decrementando\diminuindo\reduzindo o valor do contador
    valorContador.innerText = contador; //atualiza o valor na tela
}

function resetar() {
    contador = 0; //voltando para o zero
    valorContador.innerText = contador; //atualiza o valor na tela
}