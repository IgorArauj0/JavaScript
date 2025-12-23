const lista = document.getElementById("list");

function adicionarItem() {
    const novaLi = document.createElement("li");

    novaLi.textContent = "Novo Item";
    //Define o texto do novo item, este texto será exibido ao clicarmos no botão de adicionar elemento.

    lista.appendChild(novaLi);
    //Add o novo item (novaLi) como o último filho do elemento "lista"

}


function removerItem() {
    const ultimoItem = lista.lastElementChild;
    //Seleciona o último elemento filho dentro de "lista" e o armazena na varável "ultimo item"

    lista.removeChild(ultimoItem);
    //Remove o último item (ultimoItem) de dentro de "lista"
}