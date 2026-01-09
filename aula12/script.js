function criarElemento() {
    //Busca no HTML o elemento que possui o id "lista-de-elementos"
    const botao = document.getElementById("lista-de-elementos");

    //Cria dinamicamente uma nova "li"
    const novaLi = document.createElement("li");

//Cria dinamicamente uma nova "input"
    const novoInput = document.createElement("input");

    //Add o <input> dentro da <li>
    novaLi.appendChild(novoInput);

    //Add a <li> (que já possui o input)  dentro da <ul>
    botao.appendChild(novaLi);

}