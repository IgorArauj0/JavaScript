function criarElemento() {
    const botao = document.getElementById("item-de-elemento");

    const novaLi = document.createElement("li");

    const novoInput = document.createElement("input");

    novaLi.appendChild(novoInput);
    botao.appendChild(novaLi);
}