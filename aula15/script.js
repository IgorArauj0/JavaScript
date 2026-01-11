// Valor inicial do contador
let contador = 0;

// Seleciona o elemento que exibe o valor na tela
const valorContador = document.querySelector('#valor-contador');


// Função para aumentar o contador
function aumentar() {
    contador++; // incrementa 1
    valorContador.innerText = contador; // InnerText atualiza o valor na tela ele vai alterar o texto exibido dentro do elemento HTML
}

// Função para diminuir o contador
function diminuir() {
    contador--; // decrementa 1
    valorContador.innerText = contador; // atualiza o valor na tela
}

// Função para resetar o contador
function resetar() {
    contador = 0; // volta para zero
    valorContador.innerText = contador; // atualiza o valor na tela
}
